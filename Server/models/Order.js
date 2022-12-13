'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User)
      Order.hasOne(models.OrderDetail)
      Order.hasOne(models.OrderStatus)
      Order.hasOne(models.ShippingMethod)
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    shipping_method_id: DataTypes.INTEGER,
    order_status_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};