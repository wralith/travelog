import { Router } from 'express'
import controller from '../controllers/place.controller'
import validateAuth from '../middlewares/validateAuth'

const router = Router()

router.get('/user/:username', controller.getUserPlaces)
router.get('/:id', controller.getPlace)

router.use(validateAuth)
// Protected Routes

router.post('/', controller.addPlace)

router.delete('/:id', controller.deletePlace)

router.patch('/:id', controller.updatePlace)

export default router
