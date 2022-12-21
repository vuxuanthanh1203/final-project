'use strict'
module.exports = (sequelize, DataTypes) => {
  const OrderStatus = sequelize.define('OrderStatus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      type: DataTypes.INTEGER
    },
    status: {
      allowNull: false,
      field: 'status',
      type: DataTypes.STRING(191)
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
    tableName: 'orderstatuses',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    timestamps: true,
    underscored: true
  }
  )
  OrderStatus.associate = function (models) {
    OrderStatus.belongsTo(models.Order, { foreignKey: 'order_id' })
  }

  return OrderStatus
}
