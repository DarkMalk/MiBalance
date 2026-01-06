import type { NextFunction, Request, Response } from 'express'
import { HttpCodes } from '../types.js'

const checkErrors = (
  err: any,
  _: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err.statusCode || HttpCodes.INTERNAL_SERVER_ERROR

  return res.status(status).json({
    message: err.message || 'Internal error'
  })
}

export { checkErrors }
