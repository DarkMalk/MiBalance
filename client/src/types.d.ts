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
