import type { Request, Response, NextFunction } from 'express'

export const logger = (req: Request, _: Response, next: NextFunction) => {
  const time = new Date().toISOString()
  const ip = req.ip
  const method = req.method
  const url = req.url

  console.log(`[*] ${time} - ${ip} - ${method} ${url}`)

  next()
}
