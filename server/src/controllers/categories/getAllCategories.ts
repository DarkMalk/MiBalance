import type { Request, Response, NextFunction } from 'express'
import { HttpCodes, type PayloadAuth } from '../../types.js'

import { Category } from '../../models/Category.js'

interface RequestBody {
  user: PayloadAuth
}

const getAllCategoriesController = async (
  req: Request<unknown, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id: userId } = req.body.user

  try {
    const categories = await Category.findAll({
      where: { user_id: userId },
      order: [['id', 'ASC']]
    })

    return res.status(HttpCodes.OK).json(categories)
  } catch (err) {
    next(err)
  }
}

export { getAllCategoriesController }
