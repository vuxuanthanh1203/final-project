// @ts-check
'use strict'

const ProductImg = require('../models').ProductImg

const ProductImgQueryResolver = {
  Query: {
    /**
      * @param {number} productId - Product id
      * @param {import('../contexts/context')} context - ProductImg context
      * @returns {Array<import('../models/ProductImg')>}
      */
    async productImgs (parent, args, context) {
      const productImgs = await ProductImg.scope('+Product').findAll({
        where: {
          product_id: args.productId
        }
      })
      // console.log(productImgs)
      return productImgs.map(item => ({
        id: item.id,
        url: item.url,
        product: {
          id: item.Product.id,
          name: item.Product.name,
          description: item.Product.description
        }
      }))
    }
  }
}

module.exports = ProductImgQueryResolver
