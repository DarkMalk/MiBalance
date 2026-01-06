import { sequelize } from '../config/dbConnection.js'
import { DataTypes, type ModelDefined, type Optional } from 'sequelize'

type CategoryAttributes = {
  id: number
  name: string
  user_id: number
  created_at: Date
}

type CategoryCreationAttributes = Optional<
  CategoryAttributes,
  'id' | 'created_at'
>

const Category: ModelDefined<CategoryAttributes, CategoryCreationAttributes> =
  sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'categories',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'name']
        }
      ],
      defaultScope: {
        attributes: {
          exclude: ['user_id']
        }
      }
    }
  )

export { Category }
