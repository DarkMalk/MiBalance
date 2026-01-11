import type { CreateAndLoginUserDTO } from '../../types.js'
import type { NextFunction, Request, Response } from 'express'

import { User } from '../../models/User.js'
import bcrypt from 'bcrypt'

import { HttpCodes } from '../../types.js'

const registerController = async (
  req: Request<object, object, CreateAndLoginUserDTO>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body

  try {
    const passwordHashed = await bcrypt.hash(password, 10)

    const newUser = User.build({ email, password: passwordHashed })

    await newUser.save()

    return res
      .status(HttpCodes.CREATED)
      .json({ message: 'User created successfully' })
  } catch (err) {
    next(err)
  }
}

export { registerController }
