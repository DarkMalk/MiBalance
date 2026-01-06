import type { Request, Response, NextFunction } from 'express'
import { HttpCodes, type PayloadAuth } from '../../types.js'

import { Transaction } from '../../models/Transaction.js'

type RequestBody = {
  user: PayloadAuth
}

const getAllTransactionsController = async (
  req: Request<unknown, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body.user

  try {
    const transactions = await Transaction.findAll({ where: { user_id: id } })

    return res.status(HttpCodes.OK).json(transactions)
  } catch (err) {
    next(err)
  }
}

export { getAllTransactionsController }
