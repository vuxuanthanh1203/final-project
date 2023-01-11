const ProductAttrMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product attribute input
      * @param {import('../contexts/context')} context - Product Attribute context
      * @returns {Promise<import('../models/ProductAttr').ProductAttrEntity>}
      */
    async createProductAttr (parent, args, { context }) {
      const data = args.input
      const productAttr = await context.ProductAttr.create({
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
    async deleteProductAttr (parent, args, { context }) {
      return await context.ProductAttr.destroy({
        where: {
          id: args.productAttrId
        }
      })
    },

    /**
      * @param {*} args - Update product attribute input
      * @param {import('../contexts/context')} context - Product Attribute context
      * @returns {Promise<import('../models/ProductAttr').ProductAttrEntity>}
      */
    async updateProductAttr (parent, args, { context }) {
      const data = args.input

      await context.ProductAttr.update({ ...data }, {
        where: {
          id: args.productAttrId
        }
      })
      return context.ProductAttr.findByPk(args.productAttrId)
    }
  }
}

module.exports = ProductAttrMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteProductResult
 */
