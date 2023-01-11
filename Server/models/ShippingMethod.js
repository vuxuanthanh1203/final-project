// @ts-check
'use strict'
module.exports = (sequelize, DataTypes) => {
  const ShippingMethod = sequelize.define('ShippingMethod', {
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
    price: {
      allowNull: false,
      field: 'price',
      type: DataTypes.FLOAT
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
    tableName: 'shippingmethods',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    timestamps: true,
    underscored: true
  }
  )
  ShippingMethod.associate = function (models) {
    ShippingMethod.hasMany(models.Order)
  }

  return ShippingMethod
}

/**
 * @typedef {{
 *  id: number
 *  name: string
 *  price: number
 *  createdAt: date
 *  updatedAt: date
 *  deletedAt: date
 * }} ShippingMethodEntity
 */
