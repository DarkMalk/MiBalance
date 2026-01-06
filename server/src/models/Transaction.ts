import { sequelize } from '../config/dbConnection.js'
import { DataTypes, type ModelDefined, type Optional } from 'sequelize'
import { Category } from './Category.js'

type TransactionAttributes = {
  id: number
  user_id: number
  category_id: number
  type: 'INCOME' | 'EXPENSE'
  amount: number
  description: string | null
  transaction_date: Date
  created_at: Date
}

type TransactionCreationAttributes = Optional<
  TransactionAttributes,
  'description' | 'id' | 'created_at'
>

const Transaction: ModelDefined<
  TransactionAttributes,
  TransactionCreationAttributes
> = sequelize.define(
  'Transaction',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['INCOME', 'EXPENSE'],
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'transactions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
    defaultScope: {
      attributes: {
        exclude: ['user_id', 'category_id']
      },
      include: {
        model: Category,
        attributes: ['name'],
        required: true,
        as: 'category'
      }
    }
  }
)

export { Transaction }
