import { InferType, object, ref, string } from 'yup'

const requiredMessage = 'This field is required'
export const registerSchema = object({
  username: string().required(requiredMessage).min(3, 'Username should contain more than three characters'),
  email: string().email().required(requiredMessage),
  password: string().required(requiredMessage).min(7, 'Password should contain more than seven characters'),
  passwordConfirmation: string().oneOf([ref('password'), null], 'Passwords must match')
})

export type RegisterInputs = InferType<typeof registerSchema>
