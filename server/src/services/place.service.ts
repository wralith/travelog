import { prisma } from '../../prisma/prismaClient'
import { HttpError } from '../utils/HttpError'
import { Place } from '../models/place.model'

const addPlace = async (place: Place) => {
  const newPlace = await prisma.place.create({
    // Workaround!
    data: {
      ...place,
      coordinates: place.coordinates || {}
    }
  })

  if (!newPlace) {
    throw new HttpError(500, `Error while creating place at Service Layer`)
  }

  return newPlace
}

const getPlace = async (id: string) => {
  const place = await prisma.place.findUnique({ where: { id } })

  if (!place) {
    throw new HttpError(404, `Place with id of ${id} does not exist in database`)
  }

  return place
}

const updatePlace = async (id: string, place: Place) => {
  const updatedPlace = await prisma.place.update({
    // Workaround2!
    where: { id },
    data: {
      ...place,
      coordinates: place.coordinates || {}
    }
  })

  if (!updatedPlace) {
    throw new HttpError(500, `Error while updating place at Service Layer`)
  }

  return updatedPlace
}

const deletePlace = async (id: string) => {
  const place = await prisma.place.delete({ where: { id } })

  if (!place) {
    throw new HttpError(500, `Error while deleting place at Service Layer`)
  }

  return place
}

const getUserPlaces = async (username: string) => {
  const places = await prisma.place.findMany({ where: { createdBy: username } })

  if (!places) {
    throw new HttpError(404, `There is no place belong to user ${username} does not exist in database`)
  }

  return places
}

export default {
  addPlace,
  getPlace,
  getUserPlaces,
  updatePlace,
  deletePlace
}
