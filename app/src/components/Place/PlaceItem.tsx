import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/authContext'
import { api } from '../../utils/api'
import Card from '../Shared/UI/Card'
import Modal from '../Shared/UI/Modal'

interface Props {
  place: Place | null
}

function PlaceItem(props: Props) {
  const userContext = useContext(AuthContext)

  const [place, setPlace] = useState(props.place)
  const [showMap, setShowMap] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const toggleMap = () => setShowMap(!showMap)
  const toggleDeleteConfirmation = () => setShowDeleteConfirmation(!showDeleteConfirmation)

  const handleDelete = (id: string) => {
    api
      .delete(`/places/${id}`)
      .then((res) => {
        setShowDeleteConfirmation(false)
        setPlace(null)
        toast(`${place?.title} successfully deleted.`, { type: 'success' })
        return
      })
      .catch((err) => toast('Something went wrong', { type: 'error' }))
  }

  if (place) {
    return (
      <>
        {showMap && (
          <Modal
            backdrop
            onCancel={toggleMap}
            childProps={{
              title: place.address,
              content: (
                <div className="flex flex-col text-center justify-center gap-5 w-96 h-96">
                  <img className="rounded opacity-50" src={place.image} alt={place.title} />
                  <h2>This feature is not available yet!</h2>
                  <MapContent coordinates={place.coordinates} />
                </div>
              )
            }}
          />
        )}
        {showDeleteConfirmation && (
          <Modal
            backdrop
            onCancel={toggleDeleteConfirmation}
            childProps={{
              title: `You are about to delete ${place.title} from system!`,
              content: (
                <div className="flex flex-col text-center justify-center gap-5 w-96 h-96">
                  <img className="rounded opacity-50" src={place.image} alt={place.title} />
                  <h2>Deletion cannot be undone, please make sure before you deleting it!</h2>
                  <div className="flex gap-2 m-auto">
                    <button className="btn btn-primary" onClick={toggleDeleteConfirmation}>
                      Cancel
                    </button>
                    <button className="btn btn-warning" onClick={() => handleDelete(place.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              )
            }}
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
              <button className="btn btn-sm btn-primary" onClick={() => toggleMap()}>
                Show on Map
              </button>
              {userContext.loggedUser === place.createdBy && (
                <button className="btn btn-sm btn-primary">
                  <Link to={`/places/${place.id}/update`}>Edit</Link>
                </button>
              )}
              {userContext.loggedUser === place.createdBy && (
                <button className="btn btn-sm btn-error" onClick={() => toggleDeleteConfirmation()}>
                  Delete
                </button>
              )}
            </div>
          </Card>
        </li>
      </>
    )
  } else {
    return
  }
}

interface MapContentProps {
  coordinates: Coordinates
}

function MapContent({ coordinates }: MapContentProps) {
  return (
    <a
      target="_blank"
      href={`https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`}
    >
      <button className="btn btn-primary btn-xl">Go To Google Maps</button>
    </a>
  )
}

export default PlaceItem
