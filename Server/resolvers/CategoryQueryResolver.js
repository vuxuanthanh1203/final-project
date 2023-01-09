const CategoryQueryResolver = {
  Query: {
    /**
        * @param {*} args
        * @param {import('../contexts/context')} context - Category context
        * @returns {Array<import('../models/Category').CategoryEntity>}
        */
    async  categories (parent, args, { context }) {
      const categories = await context.Category.findAll()
      return categories
    },

    /**
        * @param {number} CategoryId - category id
        * @param {import('../contexts/context')} context - Category context
        * @returns {Promise<import('../models/Category'.CategoryEntity)>}
        */
    async category (parent, args, { context }) {
      const category = await context.Category.findByPk(args.id)
      return category
    }
  }
}

module.exports = CategoryQueryResolver
