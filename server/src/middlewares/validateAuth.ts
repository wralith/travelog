import { Request } from 'express'
import jwt from 'jsonwebtoken'
import { HandlerFunction } from '../types/HandlerFunction'

import { HttpError } from '../utils/HttpError'

const dummySecret = 'secret'

interface AuthRequest extends Request {
  userData: {
    userId: string
    username: string
  }
}

interface VerifiedToken extends jwt.JwtPayload {
  userId: string
  username: string
}

const validateAuth: HandlerFunction = (req, res, next) => {
  if (req.method === 'OPTIONS') {
	return next()
  }
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      throw new Error()
    }

    const verifiedToken = jwt.verify(token, dummySecret) as VerifiedToken
    ;(req as AuthRequest).userData = { userId: verifiedToken.userId, username: verifiedToken.username }
    next()
  } catch (err) {
    const error = new HttpError(401, 'Authentication failed')
    next(error)
  }
}

export default validateAuth
