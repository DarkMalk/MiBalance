import type { Request, Response, NextFunction } from 'express'
import { HttpCodes, type PayloadAuth } from '../types.js'

import { secretJwt } from '../config/guardEnv.js'
import { AppError } from '../utils/AppError.js'
import jwt from 'jsonwebtoken'

const authMiddleware = (req: Request, _: Response, next: NextFunction) => {
  try {
    const token = req.cookies['access-token']

    if (!token) {
      throw new AppError('Please login with your user', HttpCodes.UNAUTHORIZED)
    }

    const result = jwt.verify(token, secretJwt) as PayloadAuth

    // TODO: no es seguro guardarlo en el body
    req.body = {
      ...req.body,
      user: result
    }

    next()
  } catch (err) {
    next(err)
  }
}

export { authMiddleware }
