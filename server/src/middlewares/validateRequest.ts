import type { Request, Response, NextFunction } from 'express'

import { type ZodObject, ZodError } from 'zod'
import { HttpCodes } from '../types.js'

const validateRequest =
  (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await schema.safeParseAsync(req.body)

      if (!result.success) {
        return res
          .status(HttpCodes.BAD_REQUEST)
          .json({ error: result.error.issues[0]?.message })
      }

      req.body = { ...req.body, ...result.data }
      next()
    } catch (e) {
      // TODO: manage error zod
      if (e instanceof ZodError) {
        return res
          .status(HttpCodes.BAD_REQUEST)
          .json({ error: e.issues[0]?.message })
      }
    }
  }

export { validateRequest }
