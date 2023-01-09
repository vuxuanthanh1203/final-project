const ProductMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product input
      * @param {import('../contexts/context')} context - Product context
      * @returns {Promise<import('../models/Product').ProductEntity>}
      */
    async createProduct (parent, args, { context }) {
      const data = args.input
      const product = await context.Product.create({
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
    async deleteProduct (parent, args, { context }) {
      return await context.Product.destroy({
        where: {
          id: args.productId
        }
      })
    },

    /**
      * @param {*} args - Update product input
      * @param {import('../contexts/context')} context - Product context
      * @returns {Promise<import('../models/Product').ProductEntity>}
      */
    async updateProduct (parent, args, { context }) {
      const data = args.input

      await context.Product.update({ ...data }, {
        where: {
          id: args.productId
        }
      })
      return context.Product.findByPk(args.productId)
    }
  }
}

module.exports = ProductMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteProductResult
 */
