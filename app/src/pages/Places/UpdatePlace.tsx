import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import UpdatePlaceForm from '../../components/Place/UpdatePlaceForm'
import Card from '../../components/Shared/UI/Card'
import FormPageWrapper from '../../components/Shared/UI/Forms/FormPageWrapper'
import { api } from '../../utils/api'

export function UpdatePlace() {
  const placeId = useParams().placeId

  const { data, isError, isLoading, refetch } = useQuery([`place-${placeId}`], () =>
    api.get(`/places/${placeId}`).then((res) => res.data)
  )

  return (
    <FormPageWrapper>
      {data && <UpdatePlaceForm defaultValues={data as Place} refetch={refetch} />}
      {isLoading && 'Loading'}
      {isError && (
        <Card>
          <h1>There is no such Place</h1>
        </Card>
      )}
    </FormPageWrapper>
  )
}
