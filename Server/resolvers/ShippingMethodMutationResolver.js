// @ts-check
'use strict'

const ShippingMethod = require('../models').ShippingMethod

const ShippingMethodMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create shipping method input
      * @returns {Promise<import('../models/ShippingMethod').ShippingMethodEntity>}
      */
    async createShippingMethod (parent, args, context) {
      const data = args.input
      const shippingMethod = await ShippingMethod.create({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return shippingMethod
    },

    /**
      * @param {{
      *   shippingMethodId:number
      * }} args - Args of this resolver
      * @returns {Promise<DeleteShippingMethodResult>}
      */
    async deleteShippingMethod (parent, args, context) {
      await ShippingMethod.destroy({
        where: {
          id: args.shippingMethodId
        }
      })

      return {
        success: true
      }
    }
  }
}

module.exports = ShippingMethodMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteShippingMethodResult
 */
