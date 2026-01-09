import { UserScheme } from '../schemes/UserScheme.js'
import { Router } from 'express'

import { validateRequest } from '../middlewares/validateRequest.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

import { registerController } from '../controllers/users/register.js'
import { profileController } from '../controllers/users/profile.js'
import { logoutController } from '../controllers/users/logout.js'
import { loginController } from '../controllers/users/login.js'

const userRouter: Router = Router()

userRouter.post('/register', validateRequest(UserScheme), registerController)

userRouter.post('/login', validateRequest(UserScheme), loginController)

userRouter.post('/logout', authMiddleware, logoutController)

userRouter.get('/profile', authMiddleware, profileController)

export { userRouter }
