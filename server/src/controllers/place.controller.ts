import { HandlerFunction } from '../types/HandlerFunction'

export const getPlaceByID: HandlerFunction = (req, res, next) => {
  const placeID = req.params.placeID
  res.json({ message: `Places / Place with id of ${placeID} requested` })
}

export const getPlacesOfUser: HandlerFunction = (req, res, next) => {
  const userID = req.params.userID
  res.json({ message: `Places / Places belong to User with id of ${userID} requested` })
}

export const addPlace: HandlerFunction = (req, res, next) => {
  const { title, description } = req.body
}
