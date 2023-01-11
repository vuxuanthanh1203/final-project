const OrderQueryResolver = {
  Query: {
    /**
      * @param {*} args
      * @param {import('../contexts/context')} context - Order context
      * @returns {Array<import('../models/Order').OrderEntity>}
      */
    async orders (parent, args, { context }) {
      const orders = await context.Order.scope('+User+ShippingMethod+OrderStatus++OrderProductAttrs+++ProductAttr').findAll()
      if (orders == null) {
        throw Error('no data')
      }
      return orders.map((order) => ({
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
            value: orderProductAttr.ProductAttr.value,
            quantityInStock: orderProductAttr.ProductAttr.quantityInStock
          }
        }))
      }))
    }
  }
}

module.exports = OrderQueryResolver
