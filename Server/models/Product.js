'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)
      Product.hasMany(models.ProductAttr)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    short_description: DataTypes.STRING,
    product_img: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    paranoid: true,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};