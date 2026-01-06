import type { Request, Response, NextFunction } from 'express'
import {
  type PayloadAuth,
  type TransactionDTO,
  HttpCodes
} from '../../types.js'
import { AppError } from '../../utils/AppError.js'
import { Transaction } from '../../models/Transaction.js'

type RequestParams = {
  id: string
}

interface RequestBody extends TransactionDTO {
  user: PayloadAuth
}

const deleteTransactionController = async (
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

    const destroyedRows = await Transaction.destroy({
      where: { id: transactionId, user_id: userId }
    })

    if (destroyedRows === 0) {
      throw new AppError('Transaction not found', HttpCodes.NOT_FOUND)
    }

    return res.status(HttpCodes.NO_CONTENT).end()
  } catch (err) {
    next(err)
  }
}

export { deleteTransactionController }
