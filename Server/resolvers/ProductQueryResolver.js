// @ts-check
'use strict'

const Product = require('../models').Product

const ProductQueryResolver = {
  Query: {
    /**
      * @returns {Promise<Array<ProductDetail>>}
      */
    async products (parent, args, context) {
      const products = await Product.scope('+Category').findAll()
      return products.map((item) => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        price: item.price,
        description: item.description,
        category: {
          id: item.Category.id,
          name: item.Category.name,
          slug: item.Category.slug
        }
      }))
    },

    /**
      * @param {{
      *   productId:number
      * }} args - Args of this resolver
      * @returns {Promise<ProductDetail>}
      */
    async product (parent, args, context) {
      const product = await Product.scope('+Category').findByPk(args.productId)

      if (!product) {
        // @ts-ignore
        return null
      }

      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
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

module.exports = ProductQueryResolver

/**
 * @typedef {{
 *  id: number
 *  name: string
 *  slug: string
 *  price: number
 *  description: string
 *  category: import('../models/Category').CategoryEntity
 * }} ProductDetail
 */
