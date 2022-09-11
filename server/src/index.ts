import express from 'express'
import userRoutes from './routes/Users'
import placeRoutes from './routes/Places'
import handleErrors from './middlewares/handleErrors'

const app = express()

app.use(express.json())

app.use('/users', userRoutes)
app.use('/places', placeRoutes)

app.use(handleErrors)

app.listen(8080)
