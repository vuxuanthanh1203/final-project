// @ts-check
'use strict'

const ProductAttr = require('../models').ProductAttr

const ProductAttrMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product attribute input
      * @param {import('../contexts/context')} context - Product Attribute context
    * @returns {Promise<ProductAttrType>}
      */
    async createProductAttr (parent, args, context) {
      const data = args.input
      const productAttr = await ProductAttr.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return productAttr
    },

    /**
      * @param {number} productAttrId - Product Attribute Id
      * @param {import('../contexts/context')} context - Product Attribute context
      * @returns {Promise<DeleteProductResult>}
      */
    async deleteProductAttr (parent, args, context) {
      await ProductAttr.destroy({
        where: {
          id: args.productAttrId
        }
      })

      return {
        success: true
      }
    },

    /**
      * @param {*} args - Update product attribute input
      * @param {import('../contexts/context')} context - Product Attribute context
      * @returns {Promise<ProductAttrType>}
      */
    async updateProductAttr (parent, args, context) {
      const data = args.input

      await ProductAttr.update({ ...data }, {
        where: {
          id: args.productAttrId
        }
      })
      return ProductAttr.findByPk(args.productAttrId)
    }
  }
}

module.exports = ProductAttrMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteProductResult
 */

/**
 * @typedef {{
*  id: number
 *  value: string
 *  quantityInStock: number
 *  productId: number
 *  createdAt: date
 *  updatedAt: date
 *  deletedAt: date
 * }} ProductAttrType
 */
