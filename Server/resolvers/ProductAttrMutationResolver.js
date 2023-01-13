// @ts-check
'use strict'

const ProductAttr = require('../models').ProductAttr

const ProductAttrMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product attribute input
      * @returns {Promise<import('../models/ProductAttr').ProductAttrEntity>}
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
      * @param {{
      *   productAttrId:number
      * }} args - Args of this resolver
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
      * @returns {Promise<import('../models/ProductAttr').ProductAttrEntity>}
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
