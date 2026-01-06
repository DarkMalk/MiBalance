import type { Request, Response } from 'express'
import { HttpCodes } from '../../types.js'

const logoutController = (_: Request, res: Response) => {
  return res
    .clearCookie('access-token')
    .status(HttpCodes.OK)
    .json({ message: 'Logout successfully' })
}

export { logoutController }
