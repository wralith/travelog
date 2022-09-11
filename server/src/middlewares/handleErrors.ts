import { NextFunction, Request, Response } from 'express'

export default function handleErrors(error: any, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(error)
  }

  logError(error)

  res.status(error.code || 500)
  res.json({ message: error.message || 'An unknown error occurred' })
}

function logError(error: any) {
  console.log(error.message)
}
