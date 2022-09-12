import { Router } from 'express'
import controller from '../controllers/user.controller'
import validateRequest from '../middlewares/validateRequest'
import { userLoginSchema, userRegisterSchema } from '../models/user.model'

const router = Router()

router.get('/', controller.getAllUsers)
router.get('/:username', controller.getUser)

router.post('/register', validateRequest(userRegisterSchema), controller.addUser)
router.post('/login', validateRequest(userLoginSchema), controller.validateUser)

router.delete('/:username', controller.deleteUser)

router.patch('/:username', controller.updateUser)

export default router
