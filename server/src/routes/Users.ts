import { Router } from 'express'
import { addUser, getAllUsers, getUserByID } from '../controllers/Users'
import validateRequest from '../middlewares/validateRequest'
import { userRegisterSchema } from '../models/User'

const router = Router()

router.get('/', getAllUsers)
router.get('/:userID', getUserByID)

router.post('/register', validateRequest(userRegisterSchema), addUser)

export default router
