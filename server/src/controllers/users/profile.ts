import { HttpCodes, type PayloadAuth } from '../../types.js'
import type { NextFunction, Request, Response } from 'express'

import { User } from '../../models/User.js'
import { AppError } from '../../utils/AppError.js'

const profileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body.user as PayloadAuth

  try {
    const user = await User.findByPk(id)

    if (!user) {
      throw new AppError('User not found', HttpCodes.NOT_FOUND)
    }

    const { password: _, ...safeUser } = user.toJSON()

    return res.status(HttpCodes.OK).json(safeUser)
  } catch (err) {
    next(err)
  }
}

export { profileController }
