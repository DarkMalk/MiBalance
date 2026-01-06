import { sequelize } from '../config/dbConnection.js'
import { DataTypes, type Optional, type ModelDefined } from 'sequelize'

type UserAttributes = {
  id: number
  email: string
  password: string
  created_at: Date
}

type UserCreationAttributes = Optional<UserAttributes, 'id' | 'created_at'>

const User: ModelDefined<UserAttributes, UserCreationAttributes> =
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: 'users',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    }
  )

export { User }
