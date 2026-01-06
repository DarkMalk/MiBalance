import type { Request, Response, NextFunction } from 'express'
import { HttpCodes, type CategoryDTO, type PayloadAuth } from '../../types.js'
import { Category } from '../../models/Category.js'

interface RequestBody extends CategoryDTO {
  user: PayloadAuth
}

const createCategoryController = async (
  req: Request<unknown, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body.user
  const { name } = req.body

  try {
    const category = await Category.create({ name, user_id: id })

    const { user_id: _, ...safeCategoryResponse } = category.dataValues

    return res.status(HttpCodes.CREATED).json(safeCategoryResponse)
  } catch (err) {
    next(err)
  }
}

export { createCategoryController }
