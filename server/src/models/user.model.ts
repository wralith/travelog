import { User as UserPrisma } from '@prisma/client'
import { object, ref, string } from 'yup'

export type User = UserPrisma

export interface UserDTO {
  id: string
  username: string
  email: string
  image: string
}

export const userDTOMapper = (user: User): UserDTO => ({
  id: user.id,
  username: user.username,
  email: user.email,
  image: user.image
})

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
