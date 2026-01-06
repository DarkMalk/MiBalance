import { dbConnection } from './guardEnv.js'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(dbConnection)

export { sequelize }
