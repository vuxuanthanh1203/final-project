// @ts-check
'use strict'

const Product = require('../models').Product

const ProductMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product input
      * @param {import('../contexts/context')} context - Product context
    * @returns {Promise<ProductType>}
      */
    async createProduct (parent, args, context) {
      const data = args.input
      const product = await Product.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return product
    },

    /**
      * @param {number} ProductId - Product id
      * @param {import('../contexts/context')} context - Product context
      * @returns {Promise<DeleteProductResult>}
      */
    async deleteProduct (parent, args, context) {
      await Product.destroy({
        where: {
          id: args.productId
        }
      })

      return {
        success: true
      }
    },

    /**
      * @param {*} args - Update product input
      * @param {import('../contexts/context')} context - Product context
      * @returns {Promise<ProductType>}
      */
    async updateProduct (parent, args, context) {
      const data = args.input

      await Product.update({ ...data }, {
        where: {
          id: args.productId
        }
      })
      return Product.findByPk(args.productId)
    }
  }
}

module.exports = ProductMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteProductResult
 */

/**
 * @typedef {{
 *  id: number
 *  name: string
 *  slug: string
 *  price: number
 *  description: string
 *  categoryId: number
 *  createdAt: date
 *  updatedAt: date
 *  deletedAt: date
 * }} ProductType
 */
