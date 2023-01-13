// @ts-check
'use strict'

const OrderStatus = require('../models').OrderStatus

const OrderStatusMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create order status input
      * @returns {Promise<import('../models/OrderStatus').OrderStatusEntity>}
      */
    async createOrderStatus (parent, args, context) {
      const data = args.input
      const orderStatus = await OrderStatus.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return orderStatus
    },

    /**
      * @param {{
      *   orderStatusId:number
      * }} args - Args of this resolver
      * @returns {Promise<DeleteOrderStatusResult>}
      */
    async deleteOrderStatus (parent, args, context) {
      await OrderStatus.destroy({
        where: {
          id: args.orderStatusId
        }
      })

      return {
        success: true
      }
    }
  }
}

module.exports = OrderStatusMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteOrderStatusResult
 */
