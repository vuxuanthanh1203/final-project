'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductAttr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductAttr.belongsTo(models.Product)
      ProductAttr.hasMany(models.ProductImg)
      ProductAttr.belongsTo(models.OrderDetail)
    }
  }
  ProductAttr.init({
    value: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity_in_stock: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductAttr',
  });
  return ProductAttr;
};