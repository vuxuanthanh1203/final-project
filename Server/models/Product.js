// @ts-check
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
      image: {
        allowNull: false,
        field: 'image',
        type: DataTypes.STRING(191),
        defaultValue: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
      },
      price: {
        allowNull: false,
        field: 'price',
        type: DataTypes.FLOAT
      },
      description: {
        allowNull: false,
        field: 'description',
        type: DataTypes.TEXT
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
  Product.associate = function (models) {
    Product.belongsTo(models.Category, { foreignKey: 'category_id' })
    Product.hasMany(models.ProductAttr)
    Product.hasMany(models.ProductImg)

    // Scope
    Product.addScope('checkStatus', {
      where: {
        deleted_at: null
      }
    })

    Product.addScope('+Category', {
      include: [{
        model: models.Category
      }]
    })
  }

  return Product
}

/**
 * @typedef {{
 * id: number
 *  name: string
 *  slug: string
 *  image: string
 *  price: number
 *  description: string
 *  category: {
 *    id: number
 *    name: string
 *    slug: string
 *  }
 * }} ProductEntity
 */
