const Query = {
  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - Category context
    * @returns
    */
  async categories (parent, args, { context }) {
    const categories = await context.Category.findAll()
    return categories
  },

  /**
    * @param {number} CategoryId - category id
    * @param {import('../contexts/context')} context - Category context
    * @returns {Promise<Category>}
    */
  async category (parent, args, { context }) {
    const category = await context.Category.findByPk(args.id)
    return category
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - Order context
    * @returns
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
  },

  /**
   *
   * @param {*} args
   * @param {import('../contexts/context')} context - OrderProductAttr context
   * @returns
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
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - OrderStatus context
    * @returns
    */
  async orderStatuses (parent, args, { context }) {
    const orderStatuses = await context.OrderStatus.findAll()
    return orderStatuses
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - Product context
    * @returns
    */
  async products (parent, args, { context }) {
    const products = await context.Product.scope('+Category').findAll()
    return products.map((item) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      price: item.price,
      description: item.description,
      category: {
        id: item.Category.id,
        name: item.Category.name,
        slug: item.Category.slug
      }
    }))
  },

  /**
    * @param {number} ProductId - product id
    * @param {import('../contexts/context')} context - Product context
    * @returns {Promise<Product>}
    */
  async product (parent, args, { context }) {
    const product = await context.Product.findByPk(args.id)
    return product
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - ProductAttr context
    * @returns
    */
  async productAttributes (parent, args, { context }) {
    const productAttrs = await context.ProductAttr.scope('+Product').findAll({
      where: {
        product_id: args.productId
      }
    })
    return productAttrs.map(item => ({
      id: item.id,
      value: item.value,
      quantityInStock: item.quantityInStock,
      product: {
        id: item.Product.id,
        name: item.Product.name,
        description: item.Product.description
      }
    }))
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - ProductImg context
    * @returns
    */
  async productImgs (parent, args, { context }) {
    const productImgs = await context.ProductImg.findAll({
      where: {
        product_id: args.productId
      }
    })
    return productImgs
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - User context
    * @returns
    */
  async users (parent, args, { context }) {
    const users = await context.Users.findAll()
    return users
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - User context
    * @returns
    */
  async user (parent, args, { context }) {
    const user = await context.User.findByPk(args.id)
    return user
  },

  /**
    * @param {*} args
    * @param {import('../contexts/context')} context - ShippingMethod context
    * @returns
   */
  async shippingMethods (parent, args, { context }) {
    const shippingMethods = await context.ShippingMethod.findAll()
    return shippingMethods
  }

}

module.exports = Query
