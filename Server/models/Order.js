'use strict'
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      field: 'user_id',
      type: DataTypes.INTEGER
    },
    shippingMethodId: {
      allowNull: false,
      field: 'shipping_method_id',
      type: DataTypes.INTEGER
    },
    orderStatusId: {
      allowNull: false,
      field: 'order_status_id',
      type: DataTypes.INTEGER,
      defaultValue: 1
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
    tableName: 'orders',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: false,
    timestamps: true,
    underscored: true
  }
  )

  Order.associate = function (models) {
    Order.belongsTo(models.User, { foreignKey: 'user_id' })
    Order.belongsTo(models.OrderStatus, { foreignKey: 'order_status_id' })
    Order.belongsTo(models.ShippingMethod, { foreignKey: 'shipping_method_id' })

    Order.hasMany(models.OrderProductAttr)

    Order.addScope('+User+ShippingMethod+OrderStatus++orderProductAttrs+++productAttr', () => {
      return {
        include: [
          { model: models.User, require: true },
          { model: models.ShippingMethod, require: true },
          { model: models.OrderStatus, require: true },
          {
            model: models.OrderProductAttr,
            include: {
              model: models.ProductAttr,
              require: true
            },
            require: true
          }
        ]
      }
    })
  }

  return Order
}
