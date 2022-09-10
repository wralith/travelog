import { useParams } from 'react-router-dom'
import UpdatePlaceForm from '../../components/Place/UpdatePlaceForm'
import Card from '../../components/Shared/UI/Card'
import FormPageWrapper from '../../components/Shared/UI/Forms/FormPageWrapper'
import { dummyPlaces } from './dummyPlaces'

export function UpdatePlace() {
  const placeId = useParams().placeId
  const place = dummyPlaces.find((place) => place.id === placeId)

  return (
    <FormPageWrapper>
      {place ? (
        <UpdatePlaceForm defaultValues={place as Place} />
      ) : (
        <Card>
          <h1>There is no such Place</h1>
        </Card>
      )}
    </FormPageWrapper>
  )
}
