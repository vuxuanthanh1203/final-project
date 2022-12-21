'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductImg.belongsTo(models.ProductAttr)
    }
  }
  ProductImg.init({
    url: DataTypes.STRING,
    product_attr_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'ProductImg',
  });
  return ProductImg;
};