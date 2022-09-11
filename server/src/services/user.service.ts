import { prisma } from '../../prisma/prismaClient'
import { User } from '../models/user.model'
import checkUserUniqueness from '../utils/checkUserUniqueness'
import { HttpError } from '../utils/HttpError'

const getAllUsers = async () => {
  const users = await prisma.user.findMany()

  if (!users) {
    throw new HttpError(404, `Failed to retrieve users from database`)
  }

  return users
}

const getUser = async (username: string) => {
  const user = await prisma.user.findUnique({ where: { username: username } })

  if (!user) {
    throw new HttpError(404, `Username with username ${username} does not exist in database`)
  }

  return user
}

const addUser = async (user: User) => {
  await checkUserUniqueness(user.email, user.username)
  const newUser = await prisma.user.create({ data: user })

  if (!newUser) {
    throw new HttpError(400, `Username or email already exists`)
  }

  return newUser
}

const deleteUser = async (username: string) => {
  const user = await prisma.user.delete({ where: { username } })

  return user
}

const updateUser = async (username: string, user: User) => {
  const updatedUser = await prisma.user.update({ where: { username }, data: { ...user } })

  if (!updatedUser) {
    throw new HttpError(400, 'Error while updating user') // 400??
  }

  return updatedUser
}

const getUserPlaces = async (id: string) => {
  const places = await prisma.place.findMany({ where: { userId: id } })

  if (!places) {
    throw new HttpError(404, `Place belong to user with id ${id} does not exist in database`)
  }

  return places
}
export default {
  getAllUsers,
  getUser,
  addUser,
  getUserPlaces,
  deleteUser,
  updateUser
}
