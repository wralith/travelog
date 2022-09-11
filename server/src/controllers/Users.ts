import { v4 as uuidv4 } from 'uuid'
import { User } from '../models/User'

import { HandlerFunction } from '../types/HandlerFunction'

const dummyUsers: User[] = [
  { id: '1', username: 'Wra', password: 'test123', email: 'wra@wra.com' },
  { id: '2', username: 'Jonathan', password: 'test123', email: 'test@test.com' },
  { id: '3', username: 'Martha', password: 'test123', email: 'test@test.com' },
  { id: '4', username: 'Marry', password: 'test123', email: 'test@test.com' },
  { id: '5', username: 'Jake', password: 'test123', email: 'test@test.com' }
]

export const getAllUsers: HandlerFunction = (req, res, next) => {
  const payload = dummyUsers.map((user) => ({
    id: user.id,
    username: user.username,
    email: user.email
  }))
  res.json(payload)
}

export const getUserByID: HandlerFunction = (req, res, next) => {
  const userID = req.params.userID

  const user = dummyUsers.find((u) => u.id === userID)

  if (!user) {
    const error: Error = new Error('There is no such user with the id of ' + userID)
    error.code = 404
    return next(error)
  }

  res.json(user)
}

export const addUser: HandlerFunction = (req, res, next) => {
  const { username, email, password } = req.body
  const newUser = { id: uuidv4(), username, email, password }
  dummyUsers.push(newUser)

  delete newUser.password

  res.status(201).json(newUser)
}
