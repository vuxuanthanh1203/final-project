// @ts-check
'use strict'

const OrderProductAttr = require('../models').OrderProductAttr

const OrderProductAttrMutation = {
  Mutation: {
    /**
      * @param {*} args - Create order product attribute input
      * @returns {Promise<import('../models/OrderProductAttr')>}

      */
    async createOrderProductAttr (parent, args, context) {
      const data = args.input
      const orderProductAttr = await OrderProductAttr.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return orderProductAttr
    },

    /**
      * @param {number} orderProductAttrId - Order Product Attribute Id
      * @returns {Promise<DeleteOrderProductAttrResult>}
      */
    async deleteOrderProductAttr (parent, args, context) {
      await OrderProductAttr.destroy({
        where: {
          id: args.orderProductAttrId
        }
      })

      return {
        success: true
      }
    },

    /**
      * @param {*} args - Update order product attribute input
      * @returns {Promise<import('../models/OrderProductAttr')>}
      */
    async updateOrderProductAttr (parent, args, context) {
      // console.log(args)
      const data = args.input

      await OrderProductAttr.update({ ...data }, {
        where: {
          id: args.orderProductAttrId
        }
      })

      return OrderProductAttr.findByPk(args.orderProductAttrId)
    }
  }
}

module.exports = OrderProductAttrMutation

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteOrderProductAttrResult
 */
