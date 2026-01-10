import type { NextFunction, Request, Response } from 'express'
import { HttpCodes } from '../types.js'
import { ZodError } from 'zod'

const checkErrors = (
  err: any,
  _: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err.statusCode || HttpCodes.INTERNAL_SERVER_ERROR

  if (err instanceof ZodError) {
    const errors: Record<string, string> = {}

    err.issues.forEach(value => {
      errors[value.path.join('')] = value.message
    })

    return res.status(HttpCodes.BAD_REQUEST).json({
      message: 'has occurred an error with the inputs in request body',
      errors
    })
  }

  return res.status(status).json({
    message: err.message || 'Internal error'
  })
}

export { checkErrors }
