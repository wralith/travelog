import { Router } from 'express'
import { addPlace, getPlaceByID, getPlacesOfUser } from '../controllers/Places'

const router = Router()

router.get('/', (req, res, next) => {
  res.json({ message: 'Places Root Get Request' })
})

router.get('/:placeID', getPlaceByID)
router.get('/user/:userID', getPlacesOfUser)
router.post('/', addPlace)

export default router
