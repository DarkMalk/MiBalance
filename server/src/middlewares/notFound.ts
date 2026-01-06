import type { Request, Response } from 'express'
import { HttpCodes } from '../types.js'

export const notFound = (_: Request, res: Response) => {
  return res.status(HttpCodes.NOT_FOUND).end()
}
