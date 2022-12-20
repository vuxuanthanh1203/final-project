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

'use strict'
module.exports = (sequelize, DataTypes) => {
  const ProductImg = sequelize.define('ProductImg', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      type: DataTypes.INTEGER
    },
    url: {
      allowNull: false,
      field: 'url',
      type: DataTypes.STRING(191)
    },
    product_attr_id: {
      allowNull: false,
      field: 'product_attr_id',
      type: DataTypes.INTEGER,
      unique: true
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
      tableName: 'productimgs',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  )
  ProductImg.associate = function (models) {
    ProductImg.belongsTo(models.ProductAttr, { foreignKey: 'product_attr_id' })
  }

  return ProductImg
}