// @ts-check
'use strict'

const ProductAttr = require('../models').ProductAttr

const ProductAttrQueryResolver = {
  Query: {
    /**
      * @param {number} productId - Product id
      * @returns {Array<ProductAttrDetail>}
      */
    async productAttributes (parent, args, context) {
      const productAttrs = await ProductAttr.scope('+Product').findAll({
        where: {
          product_id: args.productId
        }
      })
      return productAttrs.map(item => ({
        id: item.id,
        value: item.value,
        quantityInStock: item.quantityInStock,
        product: {
          id: item.Product.id,
          name: item.Product.name,
          description: item.Product.description
        }
      }))
    }
  }
}

module.exports = ProductAttrQueryResolver

/**
 * @typedef {{
 *  id: number
 *  value: string
 *  quantityInStock: number
 *  product: import('../models/Product').ProductEntity
 *  createdAt: date
 *  updatedAt: date
 *  deletedAt: date
 * }} ProductAttrDetail
 */
