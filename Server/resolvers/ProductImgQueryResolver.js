// @ts-check
'use strict'

const ProductImg = require('../models').ProductImg

const ProductImgQueryResolver = {
  Query: {
    /**
      * @param {number} productId - Product id
      * @returns {Array<ProductImgDetail>}
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

/**
 * @typedef {{
 *  id: number
 *  url: string
 *  product: import('../models/Product').ProductEntity
 *  createdAt: date
 *  updatedAt: date
 * }} ProductImgDetail
 */
