import {
  HttpCodes,
  type CreateAndLoginUserDTO,
  type PayloadAuth
} from '../../types.js'
import type { NextFunction, Request, Response } from 'express'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { secretJwt } from '../../config/guardEnv.js'
import { User } from '../../models/User.js'
import { AppError } from '../../utils/AppError.js'

const loginController = async (
  req: Request<object, object, CreateAndLoginUserDTO>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw new AppError(
        'Please verify, email or password is incorrect',
        HttpCodes.BAD_REQUEST
      )
    }

    const passwordHashed = user.getDataValue('password')

    const result = await bcrypt.compare(password, passwordHashed)
    if (!result) {
      throw new AppError(
        'Please verify, email or password is incorrect',
        HttpCodes.BAD_REQUEST
      )
    }

    const payload: PayloadAuth = { id: user.getDataValue('id'), email }

    const token = jwt.sign(payload, secretJwt, { expiresIn: '1h' })

    return res
      .status(HttpCodes.OK)
      .cookie('access-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 1000 * 60 * 60
      })
      .json(payload)
  } catch (err) {
    next(err)
  }
}

export { loginController }
