// @ts-check
'use strict'

const OrderStatus = require('../models').OrderStatus

const OrderStatusQueryResolver = {
  Query: {
    /**
      * @param {import('../contexts/context')} context - OrderStatus context
      * @returns {Array<import('../models/OrderStatus').OrderStatusEntity>}
      */
    async orderStatuses (parent, args, context) {
      const orderStatuses = await OrderStatus.findAll()
      return orderStatuses
    }
  }
}

module.exports = OrderStatusQueryResolver
