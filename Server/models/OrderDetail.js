'use strict'
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      type: DataTypes.INTEGER
    },
    order_id: {
      allowNull: false,
      field: 'order_id',
      type: DataTypes.INTEGER
    },
    product_attr_id: {
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
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE(3)
    }
  },
    {
      tableName: 'orderdetails',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  )
  OrderDetail.associate = function (models) {
    OrderDetail.belongsTo(models.Order, { foreignKey: 'order_id' })
    OrderDetail.hasOne(models.ProductAttr)
  }

  return OrderDetail
}