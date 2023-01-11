const OrderMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create order input
      * @param {import('../contexts/context')} context - Order context
      * @returns {Promise<import('../models/Order').OrderEntity>}
      */
    async createOrder (parent, args, { context }) {
      const data = args.input
      const order = await context.Order.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return order
    },

    /**
      * @param {number} orderId - OrderId
      * @param {import('../contexts/context')} context - Order context
      * @returns {Promise<DeleteOrderResult>}
      */
    async deleteOrder (parent, args, { context }) {
      return await context.Order.destroy({
        where: {
          id: args.orderId
        }
      })
    }
  }
}

module.exports = OrderMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteOrderResult
 */
