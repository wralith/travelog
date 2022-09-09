import { useParams } from 'react-router-dom'
import PlaceList from '../../components/Place/PlaceList'
import { dummyPlaces } from './dummyPlaces'


export function UserPlaces() {
  const userId = useParams().userId
  const loadedPlaces = dummyPlaces.filter((place) => place.createdBy == userId)
  return <PlaceList places={loadedPlaces} />
}
