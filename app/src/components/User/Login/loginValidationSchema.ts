import { InferType, object, string } from 'yup'

const requiredMessage = 'This field is required'
export const loginSchema = object({
  username: string().required(requiredMessage).min(3, 'Username should contain more than three characters'),
  password: string().required(requiredMessage).min(7, 'Password should contain more than seven characters')
})

export type LoginInputs = InferType<typeof loginSchema>
