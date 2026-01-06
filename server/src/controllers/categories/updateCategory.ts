import type { Request, Response, NextFunction } from 'express'
import { HttpCodes, type CategoryDTO, type PayloadAuth } from '../../types.js'
import { Category } from '../../models/Category.js'
import { AppError } from '../../utils/AppError.js'

type RequestParams = {
  id: string
}

interface RequestBody extends CategoryDTO {
  user: PayloadAuth
}

const updateCategoryController = async (
  req: Request<RequestParams, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id: userId } = req.body.user
  const { name } = req.body
  const { id } = req.params

  try {
    const categoryId = Number(id)

    if (!Number.isInteger(categoryId)) {
      throw new AppError('Category not found', HttpCodes.NOT_FOUND)
    }

    const [affectedCount] = await Category.update(
      { name },
      { where: { id: categoryId, user_id: userId } }
    )

    if (affectedCount === 0) {
      throw new AppError('Category not modified', HttpCodes.NOT_MODIFIED)
    }

    return res
      .status(HttpCodes.OK)
      .json({ message: 'Category updated successfully' })
  } catch (err) {
    next(err)
  }
}

export { updateCategoryController }
