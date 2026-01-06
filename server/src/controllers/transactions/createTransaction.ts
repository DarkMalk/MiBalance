import type { Request, Response, NextFunction } from 'express'
import {
  HttpCodes,
  type PayloadAuth,
  type TransactionDTO
} from '../../types.js'

import { Transaction } from '../../models/Transaction.js'
import { AppError } from '../../utils/AppError.js'

interface RequestBody extends TransactionDTO {
  user: PayloadAuth
}

const createTransactionController = async (
  req: Request<unknown, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id: userId } = req.body.user
  const { category_id, type, amount, transaction_date, description } = req.body

  try {
    const newTransaction = await Transaction.create({
      user_id: userId,
      category_id,
      amount,
      type,
      description: description || null,
      transaction_date: new Date(transaction_date)
    })

    const transaction = await Transaction.findOne({
      where: { id: newTransaction.dataValues.id, user_id: userId }
    })

    if (!transaction) {
      throw new AppError('Transaction not found', HttpCodes.NOT_FOUND)
    }

    return res.status(HttpCodes.CREATED).json(transaction)
  } catch (err) {
    next(err)
  }
}

export { createTransactionController }
