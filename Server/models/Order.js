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
      type: DataTypes.INTEGER
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
    deletedAt: 'deleted_at',
    paranoid: true,
    timestamps: true,
    underscored: true
  }
  )

  Order.associate = function (models) {
    Order.belongsTo(models.User, { foreignKey: 'user_id' })
    Order.hasOne(models.OrderProductAttr)
    Order.hasOne(models.OrderStatus)
    Order.hasOne(models.ShippingMethod)
  }

  return Order
}
