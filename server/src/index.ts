import express from 'express'
import cors from 'cors'
import { prisma } from '../prisma/prismaClient'

import userRoutes from './routes/user.route'
import placeRoutes from './routes/place.route'
import handleErrors from './middlewares/handleErrors'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
    allowedHeaders: 'Authorization'
  })
)
app.use('/users', userRoutes)
app.use('/places', placeRoutes)

app.use(handleErrors)

prisma.$connect()

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Server is running at port: ' + port)
})
