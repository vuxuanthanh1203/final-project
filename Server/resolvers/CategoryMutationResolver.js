const Query = {
  Mutation: {
    /**
      * @param {*} args - Create category input
      * @param {import('../contexts/context')} context - Category context
      * @returns {Promise<import('../models/Category').CategoryEntity>}
      */
    async createCategory (parent, args, { context }) {
      const data = args.input
      const category = await context.Category.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return category
    },

    /**
      * @param {number} categoryId - Category id
      * @param {import('../contexts/context')} context - Category context
      * @returns {Promise<DeleteCategoryResult>}
      */
    async deleteCategory (parent, args, { context }) {
      return await context.Category.destroy({
        where: {
          id: args.categoryId
        }
      })
    },

    /**
      * @param {*} args - Update category input
      * @param {import('../contexts/context')} context - Category context
      * @returns {Promise<import('../models/Category').CategoryEntity>}
      */
    async updateCategory (parent, args, { context }) {
      const data = args.input

      await context.Category.update({ ...data }, {
        where: {
          id: args.categoryId
        }
      })
      return context.Category.findByPk(args.categoryId)
    }
  }
}

module.exports = Query

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteCategoryResult
 */
