// @ts-check
'use strict'

const Order = require('../models').Order

const OrderMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create order input
    * @returns {Promise<import('../models/Order')>}
      */
    async createOrder (parent, args, context) {
      const data = args.input
      const order = await Order.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return order
    },

    /**
      * @param {{
      *   orderId:number
      * }} args - Args of this resolver
      * @returns {Promise<DeleteOrderResult>}
      */
    async deleteOrder (parent, args, context) {
      await Order.destroy({
        where: {
          id: args.orderId
        }
      })

      return {
        success: true
      }
    },

    /**
      * @param {*} args - Update order input
      * @returns {Promise<import('../models/Order').OrderEntity>}
      */
    async updateOrder (parent, args, context) {
      const data = args.input

      await Order.update({ ...data }, {
        where: {
          id: args.orderId
        }
      })
      return Order.findByPk(args.orderId)
    }
  }
}

module.exports = OrderMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteOrderResult
 */
