// @ts-check
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
    productId: {
      allowNull: false,
      field: 'product_id',
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
    }
  },
  {
    tableName: 'productimgs',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: false,
    timestamps: true,
    underscored: true
  }
  )
  ProductImg.associate = function (models) {
    ProductImg.belongsTo(models.Product, { foreignKey: 'product_id' })

    ProductImg.addScope('+Product', {
      include: [{
        model: models.Product
      }]
    })
  }

  return ProductImg
}

/**
 * @typedef {{
 *  id: number
 *  url: string
 *  productId: number
 *  createdAt: date
 *  updatedAt: date
 * }} ProductImgEntity
 */
