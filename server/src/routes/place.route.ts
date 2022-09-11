import { Router } from 'express'
import controller from '../controllers/place.controller'

const router = Router()

router.get('/user/:id', controller.getUserPlaces)
router.get('/:id', controller.getPlace)
router.put('/:id', controller.updatePlace)
router.delete('/:id', controller.deletePlace)

router.post('/', controller.addPlace)

export default router
