import { Transaction } from './Transaction.js'
import { Category } from './Category.js'
import { User } from './User.js'

// Associations users 1 -> * categories
Category.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Category, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

// Associations users 1 -> * transactions

User.hasMany(Transaction, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Transaction.belongsTo(User, {
  foreignKey: 'user_id'
})

// Associations categories 1 -> * transactions
Category.hasMany(Transaction, {
  foreignKey: 'category_id'
})

Transaction.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
})

export { Category, User, Transaction }
