// @ts-check
'use strict'

const ShippingMethod = require('../models').ShippingMethod

const ShippingMethodQueryResolver = {
  Query: {
    /**
      * @returns {Promise<Array<import('../models/ShippingMethod').ShippingMethodEntity>>}
      */
    async shippingMethods (parent, args, context) {
      const shippingMethods = await ShippingMethod.findAll()
      return shippingMethods
    }
  }
}

module.exports = ShippingMethodQueryResolver
