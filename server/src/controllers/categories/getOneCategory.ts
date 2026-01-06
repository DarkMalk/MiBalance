import type { Request, Response, NextFunction } from 'express'
import { HttpCodes, type PayloadAuth } from '../../types.js'

import { Category } from '../../models/Category.js'
import { AppError } from '../../utils/AppError.js'

type RequestParams = {
  id: string
}

interface RequestBody {
  user: PayloadAuth
}

const getOneCategoryController = async (
  req: Request<RequestParams, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id: userId } = req.body.user
  const { id } = req.params

  try {
    const categoryId = Number(id)

    if (!Number.isInteger(categoryId)) {
      throw new AppError('Category not found', HttpCodes.NOT_FOUND)
    }

    const category = await Category.findOne({
      where: {
        id: categoryId,
        user_id: userId
      }
    })

    if (!category) {
      throw new AppError('Category not found', HttpCodes.NOT_FOUND)
    }

    return res.status(HttpCodes.OK).json(category)
  } catch (err) {
    next(err)
  }
}

export { getOneCategoryController }
