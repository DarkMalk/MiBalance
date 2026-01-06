import { sequelize } from '../config/dbConnection.js'
import '../models/index.js'

try {
  await sequelize.sync()
  console.log('[*] Synchronized database')
} catch (error) {
  console.log('[*] has occurred an error synchronized database: ', error)
}
