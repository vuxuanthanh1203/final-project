// @ts-check
'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      field: 'name',
      type: DataTypes.STRING(191)
    },
    userName: {
      allowNull: false,
      field: 'user_name',
      type: DataTypes.STRING(191)
    },
    email: {
      allowNull: false,
      field: 'email',
      type: DataTypes.STRING(191)
    },
    password: {
      allowNull: false,
      field: 'password',
      type: DataTypes.STRING(191)
    },
    phoneNumber: {
      allowNull: false,
      field: 'phone_number',
      type: DataTypes.STRING(191)
    },
    address: {
      allowNull: false,
      field: 'address',
      type: DataTypes.STRING(191)
    },
    isAdmin: {
      allowNull: false,
      field: 'is_admin',
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      field: 'created_at',
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      allowNull: false,
      field: 'updated_at',
      type: DataTypes.DATE(3)
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE(3)
    }
  },
  {
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    timestamps: true,
    underscored: true
  }
  )
  User.associate = function (models) {
    User.hasMany(models.Order)
  }

  return User
}

/**
 * @typedef {{
 *  id: number
 *  name: string
 *  userName: string
 *  email: string
 *  phoneNumber: string
 *  address: string
 *  isAdmin: boolean
 * }} UserEntity
 */
