const OrderProductAttrQueryResolver = {
  Query: {
    /**
     *
     * @param {*} args
     * @param {import('../contexts/context')} context - OrderProductAttr context
     * @returns {Array<import('../models/OrderProductAttr').OrderProductAttrEntity>}
     */
    async orderProductAttr (parent, args, { context }) {
      const orderProductAttrs = await context.OrderProductAttr.scope({ method: ['+Order+ProductAttr?userId?orderId', args.userId, args.orderId] }).findAll()
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
