import { NextFunction, Request, Response } from 'express'

export type HandlerFunction = (req: Request, res: Response, next: NextFunction) => any
