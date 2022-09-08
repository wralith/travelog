import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Shared/UI/Card'
import Modal from '../Shared/UI/Modal'

interface Props {
  place: Place
}

function PlaceItem({ place }: Props) {
  const [showMap, setShowMap] = useState(false)
  const toggleMap = () => setShowMap(!showMap)

  return (
    <>
      {showMap && (
        <Modal
          backdrop
          show={showMap}
          onCancel={toggleMap}
          childProps={{ title: 'Map', content: 'Map Content', onSubmit: toggleMap }}
        />
      )}
      <li className="w-full lg:w-1/2">
        <Card className="flex-col m-2 p-0 pb-3">
          <img src={place.image} alt={place.title} className="h-96" />
          <div className="text-center">
            <h2 className="font-bold text-2xl">{place.title}</h2>
            <h3 className="font-bold text-lg">{place.address}</h3>
            <p>{place.description}</p>
          </div>
          <hr className="w-full border-base-content/30" />
          <div className="flex p-2 gap-2">
            <button className="btn btn-sm btn-primary" onClick={() => toggleMap()}>Show on Map</button>
            <button className="btn btn-sm btn-primary">
              <Link to={`/places/${place.id}`}>Edit</Link>
            </button>
            <button className="btn btn-sm btn-error">Delete</button>
          </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
