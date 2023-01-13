// @ts-check
'use strict'

const Order = require('../models').Order

const OrderQueryResolver = {
  Query: {
    /**
      * @returns {Promise<Array<OrderDetail>>}
      */
    async orders (parent, args, context) {
      const orders = await Order.scope('+User+ShippingMethod+OrderStatus++OrderProductAttrs+++ProductAttr').findAll()
      if (orders == null) {
        throw Error('no data')
      }

      const result = orders.map((order) => ({
        id: order.id,
        user: {
          id: order.User.id,
          name: order.User.name,
          email: order.User.email,
          phoneNumber: order.User.phoneNumber,
          address: order.User.address
        },
        // orderStatus: order.OrderStatus
        shippingMethod: {
          id: order.ShippingMethod.id,
          name: order.ShippingMethod.name,
          price: order.ShippingMethod.price
        },
        orderProductAttrs: order.OrderProductAttrs.map(orderProductAttr => ({
          id: orderProductAttr.id,
          quantity: orderProductAttr.quantity,
          price: orderProductAttr.price,
          productAttr: {
            id: orderProductAttr.ProductAttr.id,
            value: orderProductAttr.ProductAttr.value
          }
        }))
      }))
      return result
    },

    /**
     * @param {{
     *  orderId:number
     * }} args - Args of this resolver
     * @returns {Promise<OrderDetail>}
     */
    async order (parent, args, context) {
      const order = await Order.scope('+User+ShippingMethod+OrderStatus++OrderProductAttrs+++ProductAttr').findByPk(args.orderId)

      if (!order) {
        // @ts-ignore
        return null
      }

      const result = {
        id: order.id,
        user: {
          id: order.User.id,
          name: order.User.name,
          email: order.User.email,
          phoneNumber: order.User.phoneNumber,
          address: order.User.address
        },
        orderStatus: {
          id: order.OrderStatus.id,
          status: order.OrderStatus.status
        },
        shippingMethod: {
          id: order.ShippingMethod.id,
          name: order.ShippingMethod.name,
          price: order.ShippingMethod.price
        },
        orderProductAttrs: order.OrderProductAttrs.map(orderProductAttr => ({
          id: orderProductAttr.id,
          quantity: orderProductAttr.quantity,
          price: orderProductAttr.price,
          productAttr: {
            id: orderProductAttr.ProductAttr.id,
            value: orderProductAttr.ProductAttr.value
          }
        }))
      }
      // @ts-ignore
      return result
    }
  }
}

module.exports = OrderQueryResolver

/**
 * @typedef {{
 *  id: number
 *  user: import('../models/User').UserEntity
 *  shippingMethod: import('../models/ShippingMethod').ShippingMethodEntity
 *  orderStatus: import('../models/OrderStatus').OrderStatusEntity
 *  orderProductAttr: import('../models/OrderProductAttr').OrderProductAttrEntity
 * }} OrderDetail
 */
