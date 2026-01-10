import type { Request, Response, NextFunction } from 'express'
import { type ZodObject } from 'zod'
import { AppError } from '../utils/AppError.js'
import { HttpCodes } from '../types.js'

const validateRequest =
  (schema: ZodObject) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      if (typeof req.body === 'undefined') {
        throw new AppError('Request body is required', HttpCodes.BAD_REQUEST)
      }

      const result = await schema.parseAsync(req.body)

      req.body = { ...req.body, ...result }
      next()
    } catch (err) {
      next(err)
    }
  }

export { validateRequest }
