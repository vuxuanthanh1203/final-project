// @ts-check
'use strict'

const ProductImg = require('../models').ProductImg

const ProductImgMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product image input
      * @param {import('../contexts/context')} context - Product Image context
    * @returns {Promise<ProductImgType>}
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
      * @param {import('../contexts/context')} context - Product Image context
      * @returns {Promise<DeleteProductImgResult>}
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

/**
 * @typedef {{
 * id: number
 *  url: string
 *  productId: number
 *  createdAt: date
 *  updatedAt: date
 * }} ProductImgType
 */
