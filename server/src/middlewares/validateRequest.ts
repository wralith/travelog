import { AnySchema } from 'yup'
import { HandlerFunction } from '../types/HandlerFunction'

const validateRequest =
  (schema: AnySchema): HandlerFunction =>
  async (req, res, next) => {
    try {
      await schema.validate(req.body)

      next()
    } catch (e: any) {
      return res.status(400).json({ message: e.message || 'error while validating request' })
    }
  }

export default validateRequest
