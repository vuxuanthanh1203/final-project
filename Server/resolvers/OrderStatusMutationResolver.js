const OrderStatusMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create order status input
      * @param {import('../contexts/context')} context - Order Status context
      * @returns {Promise<import('../models/OrderStatus').OrderStatusEntity>}
      */
    async createOrderStatus (parent, args, { context }) {
      const data = args.input
      const orderStatus = await context.OrderStatus.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return orderStatus
    },

    /**
      * @param {number} orderStatusId - Order Status Id
      * @param {import('../contexts/context')} context - Order Status context
      * @returns {Promise<DeleteOrderStatusResult>}
      */
    async deleteOrderStatus (parent, args, { context }) {
      return await context.OrderStatus.destroy({
        where: {
          id: args.orderStatusId
        }
      })
    }
  }
}

module.exports = OrderStatusMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteOrderStatusResult
 */
