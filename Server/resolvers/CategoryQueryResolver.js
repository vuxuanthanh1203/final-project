// @ts-check
'use strict'

const Category = require('../models').Category

const CategoryQueryResolver = {
  Query: {
    /**
      * @returns {Promise<Array<import('../models/Category').CategoryEntity>>}
      */
    async categories (parent, args, context) {
      const categories = await Category.findAll()
      return categories
    },

    /**
      * @param {{
      *   categoryId:number
      * }} args - Args of this resolver
      * @returns {Promise<import('../models/Category').CategoryEntity>}
      */
    async category (parent, args, context) {
      const category = Category.findByPk(args.categoryId)
      return category
    }
  }
}

module.exports = CategoryQueryResolver
