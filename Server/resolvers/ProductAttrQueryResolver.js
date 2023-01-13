// @ts-check
'use strict'

const ProductAttr = require('../models').ProductAttr

const ProductAttrQueryResolver = {
  Query: {
    /**
      * @param {number} productId - Product id
      * @param {import('../contexts/context')} context - ProductAttr context
      * @returns {Array<import('../models/ProductAttr').ProductAttrEntity>}
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
