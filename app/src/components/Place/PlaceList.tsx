import Card from '../Shared/UI/Card'
import PlaceItem from './PlaceItem'

interface Props {
  places: Place[]
}

function PlaceList({ places }: Props) {
  if (places.length === 0) {
    return (
      <Card className="flex flex-col xl:w-2/3 m-auto gap-10">
        <h2 className='text-3xl font-bold'>No Places found.</h2>
        <button className='btn btn-primary'>Create Place</button>
      </Card>
    )
  }

  return (
    <ul className="flex flex-wrap xl:w-2/3 m-auto">
      {places.map((place) => (
        <PlaceItem place={place} key={place.id} />
      ))}
    </ul>
  )
}

export default PlaceList
