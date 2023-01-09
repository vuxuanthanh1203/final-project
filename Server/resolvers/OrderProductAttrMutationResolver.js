const OrderProductAttrMutation = {
  Mutation: {
    /**
      * @param {*} args - Create order product attribute input
      * @param {import('../contexts/context')} context - Order Product Attribute context
      * @returns {Promise<import('../models/OrderProductAttr').OrderProductAttrEntity>}
      */
    async createOrderProductAttr (parent, args, { context }) {
      const data = args.input
      const orderProductAttr = await context.OrderProductAttr.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return orderProductAttr
    },

    /**
      * @param {number} OrderProductAttrId - Order Product Attribute Id
      * @param {import('../contexts/context')} context - Order Product Attribute context
      * @returns {Promise<DeleteOrderProductAttrResult>}
      */
    async deleteOrderProductAttr (parent, args, { context }) {
      return await context.OrderProductAttr.destroy({
        where: {
          id: args.orderProductId
        }
      })
    },

    /**
      * @param {*} args - Update order product attribute input
      * @param {import('../contexts/context')} context - Order Product Attribute context
      * @returns {Promise<import('../models/OrderProductAttr').OrderProductAttrEntity>}
      */
    async updateOrderProductAttr (parent, args, { context }) {
      const data = args.input

      await context.OrderProductAttr.update({ ...data }, {
        where: {
          id: args.orderProductAttrId
        }
      })

      return context.OrderProductAttr.findByPk(args.orderProductAttrId)
    }
  }
}

module.exports = OrderProductAttrMutation

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteOrderProductAttrResult
 */
