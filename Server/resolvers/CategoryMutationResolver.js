// @ts-check
'use strict'

const Category = require('../models').Category

const CategoryQueryResolver = {
  Mutation: {
    /**
      * @param {*} args - Create category input
      * @returns {Promise<import('../models/Category').CategoryEntity>}
      */
    async createCategory (parent, args, context) {
      const data = args.input
      const category = await Category.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return category
    },

    /**
      * @param {{
      *   categoryId: number
      * }} args - Args of this resolver.
      * @returns {Promise<DeleteCategoryResult>}
      */
    async deleteCategory (parent, args, context) {
      await Category.destroy({
        where: {
          id: args.categoryId
        }
      })
      return {
        success: true
      }
    },

    /**
      * @param {*} args - Update category input
      * @returns {Promise<import('../models/Category').CategoryEntity>}
      */
    async updateCategory (parent, args, context) {
      const data = args.input

      await Category.update({ ...data }, {
        where: {
          id: args.categoryId
        }
      })
      return Category.findByPk(args.categoryId)
    }
  }
}

module.exports = CategoryQueryResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteCategoryResult
 */
