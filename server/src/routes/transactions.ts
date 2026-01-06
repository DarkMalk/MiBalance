import { Router } from 'express'

import { getAllTransactionsController } from '../controllers/transactions/getAllTransactions.js'
import { getOneTransactionController } from '../controllers/transactions/getOneTransaction.js'
import { createTransactionController } from '../controllers/transactions/createTransaction.js'
import { deleteTransactionController } from '../controllers/transactions/deleteTransaction.js'
import { updateTransactionController } from '../controllers/transactions/updateTransaction.js'

import { authMiddleware } from '../middlewares/authMiddleware.js'
import { validateRequest } from '../middlewares/validateRequest.js'
import { TransactionScheme } from '../schemes/TransactionScheme.js'

const transactionsRouter: Router = Router()

transactionsRouter.get('/', authMiddleware, getAllTransactionsController)
transactionsRouter.get('/:id', authMiddleware, getOneTransactionController)
transactionsRouter.post(
  '/',
  authMiddleware,
  validateRequest(TransactionScheme),
  createTransactionController
)
transactionsRouter.delete('/:id', authMiddleware, deleteTransactionController)
transactionsRouter.put(
  '/:id',
  authMiddleware,
  validateRequest(TransactionScheme),
  updateTransactionController
)

export { transactionsRouter }
