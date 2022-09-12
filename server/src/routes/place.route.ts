import { Router } from 'express'
import controller from '../controllers/place.controller'

const router = Router()

router.get('/user/:id', controller.getUserPlaces)
router.get('/:id', controller.getPlace)

router.post('/', controller.addPlace)

router.delete('/:id', controller.deletePlace)

router.patch('/:id', controller.updatePlace)

export default router
