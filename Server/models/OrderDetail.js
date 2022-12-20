'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.Order)
      OrderDetail.hasOne(models.ProductAttr)
    }
  }
  OrderDetail.init({
    order_id: DataTypes.INTEGER,
    product_attr_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    timestamps: false,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};