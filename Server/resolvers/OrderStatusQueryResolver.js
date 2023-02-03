// @ts-check
'use strict'

const OrderStatus = require('../models').OrderStatus

const OrderStatusQueryResolver = {
  Query: {
    /**
      * @returns {Promise<Array<import('../models/OrderStatus').OrderStatusEntity>>}
      */
    async orderStatuses (parent, args, context) {
      const orderStatuses = await OrderStatus.findAll()
      return orderStatuses
    }
  }
}

module.exports = OrderStatusQueryResolver
