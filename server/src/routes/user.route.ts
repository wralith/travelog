import { Router } from 'express'
import controller from '../controllers/user.controller'
import validateRequest from '../middlewares/validateRequest'
import { userRegisterSchema } from '../models/user.model'

const router = Router()

router.get('/', controller.getAllUsers)
router.get('/:username', controller.getUser)
router.get('/:username/places', controller.getUserPlaces)
router.delete('/:username', controller.deleteUser)
router.put('/:username', controller.updateUser)

router.post('/register', validateRequest(userRegisterSchema), controller.addUser)

export default router
