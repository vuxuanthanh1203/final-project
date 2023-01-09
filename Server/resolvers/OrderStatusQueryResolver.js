const OrderStatusQueryResolver = {
  Query: {
    /**
      * @param {import('../contexts/context')} context - OrderStatus context
      * @returns {Array<import('../models/OrderStatus').OrderStatusEntity>}
      */
    async orderStatuses (parent, args, { context }) {
      const orderStatuses = await context.OrderStatus.findAll()
      return orderStatuses
    }
  }
}

module.exports = OrderStatusQueryResolver
