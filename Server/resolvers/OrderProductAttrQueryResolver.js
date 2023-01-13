// @ts-check
'use strict'

const OrderProductAttr = require('../models').OrderProductAttr

const OrderProductAttrQueryResolver = {
  Query: {
    /**
     *
     * @param {*} args - userId, orderId
     * @returns {Array<OrderProductAttrDetail>}
     */
    async orderProductAttrs (parent, args, context) {
      const orderProductAttrs = await OrderProductAttr.scope({ method: ['+Order+ProductAttr?userId?orderId', args.userId, args.orderId] }).findAll()
      if (!orderProductAttrs) {
        throw new Error('no data')
      }
      return orderProductAttrs.map(orderProductAttr =>
        ({
          id: orderProductAttr.id,
          quantity: orderProductAttr.quantity,
          price: orderProductAttr.price,
          order: {
            id: orderProductAttr.Order.id,
            user: {
              id: orderProductAttr.Order.User.id,
              name: orderProductAttr.Order.User.name,
              email: orderProductAttr.Order.User.email,
              phoneNumber: orderProductAttr.Order.User.phoneNumber,
              address: orderProductAttr.Order.User.address
            }
          },
          productAttr: {
            id: orderProductAttr.ProductAttr.id,
            value: orderProductAttr.ProductAttr.value
          }
        }))
    }
  }
}

module.exports = OrderProductAttrQueryResolver

/**
 * @typedef {{
 * id: number
 *  order: import('../models/Order').OrderEntity
 *  productAttr: import('../models/ProductAttr').ProductAttrEntity
 *  quantity: number
 *  price: number
 *  createdAt: date
 *  updatedAt: date
 * }} OrderProductAttrDetail
 */
