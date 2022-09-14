import jwt from 'jsonwebtoken'

interface TokenData {
  userId: string
  username: string
}

const dummySecret = 'secret'

const signToken = (data: TokenData) => jwt.sign(data, dummySecret, { expiresIn: '30m' })

export default signToken
