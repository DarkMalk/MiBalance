import type { Request, Response, NextFunction } from 'express'
import { HttpCodes, type PayloadAuth } from '../../types.js'

import { Transaction } from '../../models/Transaction.js'
import { AppError } from '../../utils/AppError.js'

interface RequestBody {
  user: PayloadAuth
}

type RequestParams = {
  id: string
}

const getOneTransactionController = async (
  req: Request<RequestParams, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id: userId } = req.body.user
  const { id } = req.params

  try {
    const transactionId = Number(id)
    if (!Number.isInteger(transactionId)) {
      throw new AppError('Transaction not found', HttpCodes.NOT_FOUND)
    }

    const transaction = await Transaction.findOne({
      where: { user_id: userId, id: transactionId }
    })

    if (!transaction) {
      throw new AppError('Transaction not found', HttpCodes.NOT_FOUND)
    }

    return res.status(HttpCodes.OK).json(transaction)
  } catch (err) {
    next(err)
  }
}

export { getOneTransactionController }
