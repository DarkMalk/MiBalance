import type { Request, Response, NextFunction } from 'express'
import {
  HttpCodes,
  type PayloadAuth,
  type TransactionDTO
} from '../../types.js'
import { AppError } from '../../utils/AppError.js'
import { Transaction } from '../../models/Transaction.js'

type RequestParams = {
  id: string
}

interface RequestBody extends TransactionDTO {
  user: PayloadAuth
}

const updateTransactionController = async (
  req: Request<RequestParams, unknown, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { id: userId } = req.body.user
  const { id } = req.params

  const { type, category_id, amount, transaction_date, description } = req.body

  try {
    const transactionId = Number(id)
    if (!Number.isInteger(transactionId)) {
      throw new AppError('Transaction not found', HttpCodes.NOT_FOUND)
    }

    const [affectedCount] = await Transaction.update(
      {
        category_id,
        amount,
        description: description ?? null,
        transaction_date: new Date(transaction_date),
        type
      },
      { where: { id: transactionId, user_id: userId } }
    )

    if (affectedCount === 0) {
      return res
        .status(HttpCodes.OK)
        .json({ message: 'Transaction not modified' })
    }

    return res
      .status(HttpCodes.OK)
      .json({ message: 'Transaction updated successfully' })
  } catch (err) {
    next(err)
  }
}

export { updateTransactionController }
