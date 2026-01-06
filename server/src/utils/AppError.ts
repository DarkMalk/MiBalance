import { HttpCodes } from '../types.js'

class AppError extends Error {
  public statusCode: number

  constructor(
    message: string,
    statusCode: number = HttpCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}

export { AppError }
