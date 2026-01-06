import * as z from 'zod'

const TransactionScheme = z.object({
  category_id: z.number().positive(),
  type: z.enum(['INCOME', 'EXPENSE']),
  amount: z.number().positive(),
  description: z.string().optional(),
  transaction_date: z.iso.date()
})

export { TransactionScheme }
