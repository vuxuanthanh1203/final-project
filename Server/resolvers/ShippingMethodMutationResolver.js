const ShippingMethodMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create shipping method input
      * @param {import('../contexts/context')} context - ShippingMethod context
      * @returns {Promise<import('../models/ShippingMethod').ShippingMethodEntity>}
      */
    async createShippingMethod (parent, args, { context }) {
      const data = args.input
      const shippingMethod = await context.ShippingMethod.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return shippingMethod
    },

    /**
      * @param {number} shippingMethodId - Shipping Method Id
      * @param {import('../contexts/context')} context - ShippingMethod context
      * @returns {Promise<DeleteShippingMethodResult>}
      */
    async deleteShippingMethod (parent, args, { context }) {
      return await context.ShippingMethod.destroy({
        where: {
          id: args.shippingMethodId
        }
      })
    }
  }
}

module.exports = ShippingMethodMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteShippingMethodResult
 */
