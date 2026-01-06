import { CategoryScheme } from '../schemes/CategoryScheme.js'
import { Router } from 'express'

import { validateRequest } from '../middlewares/validateRequest.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

import { getAllCategoriesController } from '../controllers/categories/getAllCategories.js'
import { createCategoryController } from '../controllers/categories/createCategory.js'
import { getOneCategoryController } from '../controllers/categories/getOneCategory.js'
import { deleteCategoryController } from '../controllers/categories/deleteCategory.js'
import { updateCategoryController } from '../controllers/categories/updateCategory.js'

const categoriesRouter: Router = Router()

categoriesRouter.post(
  '/',
  authMiddleware,
  validateRequest(CategoryScheme),
  createCategoryController
)

categoriesRouter.get('/:id', authMiddleware, getOneCategoryController)

categoriesRouter.get('/', authMiddleware, getAllCategoriesController)

categoriesRouter.delete('/:id', authMiddleware, deleteCategoryController)

categoriesRouter.put(
  '/:id',
  authMiddleware,
  validateRequest(CategoryScheme),
  updateCategoryController
)

export { categoriesRouter }
