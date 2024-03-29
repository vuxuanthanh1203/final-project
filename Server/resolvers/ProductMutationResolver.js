// @ts-check
'use strict'

const Product = require('../models').Product

const ProductMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product input
      * @returns {Promise<import('../models/Product').ProductEntity>}
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
      * @param {{
      *   productId:number
      * }} args - Args of this resolver
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
      * @returns {Promise<import('../models/Product').ProductEntity>}
      */
    async updateProduct (parent, args, context) {
      const data = args.input

      await Product.update({ ...data }, {
        where: {
          id: args.productId
        }
      })
      const product = await Product.scope('+Category').findByPk(args.productId)
      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        description: product.description,
        category: {
          id: product.Category.id,
          name: product.Category.name,
          slug: product.Category.slug
        }
      }
    }
  }
}

module.exports = ProductMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteProductResult
 */
