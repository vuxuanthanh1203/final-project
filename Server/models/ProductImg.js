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
    productAttrId: {
      allowNull: false,
      field: 'product_attr_id',
      type: DataTypes.INTEGER,
      unique: true
    },
    createdAt: {
      allowNull: false,
      field: 'created_at',
      type: DataTypes.DATE(3),
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      field: 'updated_at',
      type: DataTypes.DATE(3),
      defaultValue: new Date()
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE(3),
      defaultValue: null
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
