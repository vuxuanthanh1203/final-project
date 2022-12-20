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
    quantityInStock: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    paranoid: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'ProductAttr',
  });
  return ProductAttr;
};