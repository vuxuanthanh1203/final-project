const ShippingMethodQueryResolver = {
  Query: {
    /**
      * @param {import('../contexts/context')} context - ShippingMethod context
      * @returns {Array<import('../models/ShippingMethod').ShippingMethodEntity>}
      */
    async shippingMethods (parent, args, { context }) {
      const shippingMethods = await context.ShippingMethod.findAll()
      return shippingMethods
    }
  }
}

module.exports = ShippingMethodQueryResolver
