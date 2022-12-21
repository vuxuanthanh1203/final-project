'use strict'
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        field: 'name',
        type: DataTypes.STRING(191)
      },
      slug: {
        allowNull: false,
        field: 'slug',
        type: DataTypes.STRING(191)
      },
      shortDescription: {
        allowNull: false,
        field: 'short_description',
        type: DataTypes.STRING(191)
      },
      productImg: {
        allowNull: false,
        field: 'product_img',
        type: DataTypes.STRING(191)
      },
      categoryId: {
        allowNull: false,
        field: 'category_id',
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
      tableName: 'products',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
      timestamps: true,
      underscored: true
    }

  )
  Product.addScope('checkStatus', {
    where: {
      deleted_at: null
    }
  })

  Product.associate = function (models) {
    Product.belongsTo(models.Category, { foreignKey: 'category_id' })
    Product.hasMany(models.ProductAttr)
  }

  return Product
}
