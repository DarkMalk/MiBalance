interface User {
  id: number
  email: string
  created_at?: string
}

interface Category {
  id: number
  name: string
  created_at: string
}

interface Transaction {
  id: number
  type: 'EXPENSE' | 'INCOME'
  description: string | null
  transaction_date: string
  created_at: string
  category: {
    name: string
  }
}

type ErrorMessage = {
  message: string
}

type ValidationErrorMessage = ErrorMessage & { errors: Record<string, string> }

type LoginResponse = User | ErrorMessage | ValidationErrorMessage
type RegisterResponse = { message: string } | ValidationErrorMessage
