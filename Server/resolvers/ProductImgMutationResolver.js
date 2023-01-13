// @ts-check
'use strict'

const ProductImg = require('../models').ProductImg

const ProductImgMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product image input
      * @returns {Promise<import('../models/ProductImg').ProductImgEntity>}
      */
    async createProductImg (parent, args, context) {
      const data = args.input
      const productImg = await ProductImg.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return productImg
    },

    /**
      * @param {number} ProductImgId - Product image id
      * @returns {Promise<import('../models/ProductImg').ProductImgEntity>}
      */
    async deleteProductImg (parent, args, context) {
      await ProductImg.destroy({
        where: {
          id: args.productImgId
        }
      })

      return {
        success: true
      }
    }
  }
}

module.exports = ProductImgMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteProductImgResult
 */
