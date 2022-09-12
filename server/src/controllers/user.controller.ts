import { User, userDTOMapper } from '../models/user.model'
import service from '../services/user.service'
import { HandlerFunction } from '../types/HandlerFunction'
import { HttpError } from '../utils/HttpError'

const getAllUsers: HandlerFunction = async (req, res, next) => {
  try {
    const users = await service.getAllUsers()

    const payload = users.map((user) => userDTOMapper(user))

    res.status(200).json(payload)
  } catch (err) {
    next(err)
  }
}

const getUser: HandlerFunction = async (req, res, next) => {
  const username = req.params.username

  try {
    const user = await service.getUser(username)

    const payload = userDTOMapper(user)

    res.status(200).json(payload)
  } catch (err: any) {
    const error = new HttpError(404, err.message)
    next(error)
  }
}

const addUser: HandlerFunction = async (req, res, next) => {
  const userReq: User = req.body

  try {
    const user = await service.addUser(userReq)
    const payload = userDTOMapper(user as User)

    res.status(201).json(payload)
  } catch (err) {
    next(err)
  }
}

const deleteUser: HandlerFunction = async (req, res, next) => {
  const username = req.params.username

  try {
    const user = await service.deleteUser(username)
    const payload = userDTOMapper(user as User)

    res.status(200).json(payload)
  } catch (err) {
    next(err)
  }
}

const updateUser: HandlerFunction = async (req, res, next) => {
  const username = req.params.username
  const userReq: User = req.body

  try {
    const user = await service.updateUser(username, userReq)
    const payload = userDTOMapper(user as User)

    res.status(200).json(payload)
  } catch (err) {
    next(err)
  }
}

const validateUser: HandlerFunction = async (req, res, next) => {
  const { username, password } = req.body

  try {
    const user = await service.getUser(username)
    const payload = userDTOMapper(user as User)

    if (user.password === password) {
      res.status(200).json({ ...payload, token: 'dummyToken' }) // TODO: password bcrypt, jwt auth
    }

    const error = new HttpError(400, 'Username or password is wrong')

    next(error)
  } catch (err) {
    next(err)
  }
}

export default {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
  validateUser
}
