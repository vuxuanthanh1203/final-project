// @ts-check
'use strict'
module.exports = (sequelize, DataTypes) => {
  const ProductAttr = sequelize.define('ProductAttr', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      type: DataTypes.INTEGER
    },
    value: {
      allowNull: false,
      field: 'value',
      type: DataTypes.STRING(191)
    },
    quantityInStock: {
      allowNull: false,
      field: 'quantity_in_stock',
      type: DataTypes.INTEGER
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
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE(3)
    }
  },
  {
    tableName: 'productattrs',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    timestamps: true,
    underscored: true
  }
  )
  ProductAttr.associate = function (models) {
    ProductAttr.belongsTo(models.Product, { foreignKey: 'product_id' })
    ProductAttr.hasMany(models.OrderProductAttr)

    ProductAttr.addScope('+Product', {
      include: [{
        model: models.Product
      }]
    })
  }

  return ProductAttr
}

/**
 * @typedef {{
 *  id: number
 *  value: string
 *  quantityInStock: number
 *  productId: number
 *  createdAt: date
 *  updatedAt: date
 *  deletedAt: date
 * }} ProductAttrEntity
 */
