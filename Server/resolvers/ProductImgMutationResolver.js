const ProductImgMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create product image input
      * @param {import('../contexts/context')} context - Product Image context
      * @returns {Promise<import('../models/ProductImg').ProductImgEntity>}
      */
    async createProductImg (parent, args, { context }) {
      const data = args.input
      const productImg = await context.ProductImg.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return productImg
    },

    /**
      * @param {number} ProductImgId - Product image id
      * @param {import('../contexts/context')} context - Product Image context
      * @returns {Promise<DeleteProductImgResult>}
      */
    async deleteProductImg (parent, args, { context }) {
      return await context.ProductImg.destroy({
        where: {
          id: args.productImgId
        }
      })
    }
  }
}

module.exports = ProductImgMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteProductImgResult
 */
