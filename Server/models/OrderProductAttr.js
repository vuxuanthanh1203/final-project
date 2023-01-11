// @ts-check
'use strict'

const { Op } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const OrderProductAttr = sequelize.define('OrderProductAttr', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      type: DataTypes.INTEGER
    },
    orderId: {
      allowNull: false,
      field: 'order_id',
      type: DataTypes.INTEGER
    },
    productAttrId: {
      allowNull: false,
      field: 'product_attr_id',
      type: DataTypes.INTEGER
    },
    quantity: {
      allowNull: false,
      field: 'quantity',
      type: DataTypes.INTEGER
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
    }
  },
  {
    tableName: 'orderproductattrs',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: false,
    timestamps: true,
    underscored: true
  }
  )
  OrderProductAttr.associate = function (models) {
    OrderProductAttr.belongsTo(models.Order, { foreignKey: 'order_id' })
    OrderProductAttr.belongsTo(models.ProductAttr, { foreignKey: 'product_attr_id' })

    OrderProductAttr.addScope('+Order+ProductAttr?userId?orderId', (userId, orderId) => {
      return {
        include: [
          {
            model: models.Order,
            include: {
              model: models.User
            },
            where: {
              [Op.and]: [
                { userId },
                { id: orderId }
              ]
            },
            require: true
          },
          {
            model: models.ProductAttr,
            require: true
          }
        ]
      }
    })
  }

  return OrderProductAttr
}

/**
 * @typedef {{
 *  id: number
 *  order: import('./Order').OrderEntity
 *  productAttr: import('./ProductAttr').ProductAttrEntity
 *  quantity: number
 *  price: number
 *  createdAt: date
 *  updatedAt: date
 * }} OrderProductAttrEntity
 */
