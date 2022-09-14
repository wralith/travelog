import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import PlaceList from '../../components/Place/PlaceList'
import { api } from '../../utils/api'

export function UserPlaces() {
  const username = useParams().username

  const { isLoading, error, data } = useQuery([`${username}-places`], () =>
    api.get(`/places/user/${username}`).then((res) => res.data)
  )

  return (
    <div className="flex items-center justify-center p-5">
      {data && <PlaceList places={data as Place[]} />}
      {isLoading && 'Loading'}
      {error && 'Error'}
    </div>
  )
}
