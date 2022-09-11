import { HandlerFunction } from '../types/HandlerFunction'
import service from '../services/place.service'
import { Place } from '../models/place.model'

export const getPlace: HandlerFunction = async (req, res, next) => {
  const id = req.params.id

  try {
    const place = await service.getPlace(id)

    res.status(200).json(place)
  } catch (err) {
    next(err)
  }
}

export const addPlace: HandlerFunction = async (req, res, next) => {
  const placeReq: Place = req.body

  try {
    const place = await service.addPlace(placeReq)

    res.status(201).json(place)
  } catch (err) {
    next(err)
  }
}

const getUserPlaces: HandlerFunction = async (req, res, next) => {
  const username = req.params.username

  try {
    const payload = await service.getUserPlaces(username)

    res.status(200).json(payload)
  } catch (err) {
    next(err)
  }
}

const updatePlace: HandlerFunction = async (req, res, next) => {
  const id = req.params.id
  const placeReq: Place = req.body

  try {
    const place = await service.updatePlace(id, placeReq)

    res.status(200).json(place)
  } catch (err) {
    next(err)
  }
}

const deletePlace: HandlerFunction = async (req, res, next) => {
  const id = req.params.id

  try {
    const place = await service.deletePlace(id)

    res.status(200).json(place)
  } catch (err) {
    next(err)
  }
}

export default {
  addPlace,
  getPlace,
  getUserPlaces,
  updatePlace,
  deletePlace
}
