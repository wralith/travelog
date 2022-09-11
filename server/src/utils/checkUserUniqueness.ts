import { prisma } from '../../prisma/prismaClient'
import { HttpError } from './HttpError'

const checkUserUniqueness = async (email: string, username: string) => {
  const existingUserByEmail = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUserByEmail) {
    throw new HttpError(400, `Email: ${email} has been already taken`)
  }

  const existingUserByUsername = await prisma.user.findUnique({
    where: { username }
  })

  if (existingUserByUsername) {
    throw new HttpError(400, `Username: ${username} has been already taken`)
  }
}

export default checkUserUniqueness
