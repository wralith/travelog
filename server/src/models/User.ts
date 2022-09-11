import { object, ref, string } from 'yup'

export interface User {
  id: string
  username: string
  password: string
  email: string
}

export const userLoginSchema = object({
  username: string().min(3),
  password: string().min(6)
})

export const userRegisterSchema = object({
  username: string().min(3),
  email: string().email().min(3),
  password: string().min(6),
  confirmPassword: string().oneOf([ref('password')], 'Passwords should match')
})
