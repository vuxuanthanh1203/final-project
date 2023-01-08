const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')
const hashPassword = require('../utils/hashPassword')

const Mutation = {
  /**
    * @param {*} parent
    * @param {*} args - Create user input
    * @param {import('../contexts/context')} context - User context
    * @returns {String} Token
    * @returns {Promise<User>}
    */
  async createUser (parent, args, { context }) {
    const data = args.input

    const existingUser = await context.User.findOne({ where: { email: data.email } })

    if (existingUser) {
      throw new Error('Dupplicated user')
    }

    const password = await hashPassword(data.password)

    const user = await context.User.create({
      ...data,
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return {
      user,
      token: generateToken(user.id)
    }
  },

  /**
    * @param {number} UserId - UserId
    * @param {import('../contexts/context')} context - User context
    * @returns {Boolean} - Delete status
   */
  async deleteUser (parent, args, { context }) {
    return await context.User.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Update user input
    * @param {import('../contexts/context')} context - User context
    * @returns {Promise<User>}
    */
  async updateUser (parent, args, { context }) {
    const data = args.input

    await context.User.update({ ...data }, {
      where: {
        id: args.id
      }
    })
    return context.User.findByPk(args.id)
  },

  /**
    * @param {*} args - login input
    * @param {import('../contexts/context')} context - User context
    * @returns {String} Token
    * @returns {Promise<User>}
   */
  async login (parent, args, { context }) {
    const data = args.input

    const user = await context.User.findOne({ where: { email: data.email } })

    if (!user) {
      throw new Error('User not found')
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password)

    if (!isPasswordValid) {
      throw new Error('Passwords do not match !!!')
    }

    return {
      user,
      token: generateToken(user.id)
    }
  },

  /**
    * @param {*} args - Create category input
    * @param {import('../contexts/context')} context - Category context
    * @returns {Promise<Category>}
    */
  async createCategory (parent, args, { context }) {
    const data = args.input
    const category = await context.Category.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return category
  },

  /**
    * @param {number} CategoryId - CategoryId
    * @param {import('../contexts/context')} context - Category context
    * @returns {Promise<Category>}
    */
  async deleteCategory (parent, args, { context }) {
    return await context.Category.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Update category input
    * @param {import('../contexts/context')} context - Category context
    * @returns {Boolean} - Delete status
    */
  async updateCategory (parent, args, { context }) {
    const data = args.input

    await context.Category.update({ ...data }, {
      where: {
        id: args.id
      }
    })
    return context.Category.findByPk(args.id)
  },

  /**
    * @param {*} args - Create product input
    * @param {import('../contexts/context')} context - Product context
    * @returns {Promise<Product>}
    */
  async createProduct (parent, args, { context }) {
    const data = args.input
    const product = await context.Product.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return product
  },

  /**
    * @param {number} ProductId - ProductId
    * @param {import('../contexts/context')} context - Product context
    * @returns {Boolean} - Delete status
    */
  async deleteProduct (parent, args, { context }) {
    return await context.Product.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Update product input
    * @param {import('../contexts/context')} context - Product context
    * @returns {Promise<Product>}
    */
  async updateProduct (parent, args, { context }) {
    const data = args.input

    await context.Product.update({ ...data }, {
      where: {
        id: args.id
      }
    })
    return context.Product.findByPk(args.id)
  },

  /**
    * @param {*} args - Create product attribute input
    * @param {import('../contexts/context')} context - Product Attribute context
    * @returns {Promise<ProductAttr>}
    */
  async createProductAttr (parent, args, { context }) {
    const data = args.input
    const productAttr = await context.ProductAttr.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return productAttr
  },

  /**
    * @param {number} ProductAttrId - ProductAttrId
    * @param {import('../contexts/context')} context - Product Attribute context
    * @returns {Boolean} - Delete status
    */
  async deleteProductAttr (parent, args, { context }) {
    return await context.ProductAttr.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Update product attribute input
    * @param {import('../contexts/context')} context - Product Attribute context
    * @returns {Promise<ProductAttr>}
    */
  async updateProductAttr (parent, args, { context }) {
    const data = args.input

    await context.ProductAttr.update({ ...data }, {
      where: {
        id: args.id
      }
    })
    return context.ProductAttr.findByPk(args.id)
  },

  /**
    * @param {*} args - Create product image input
    * @param {import('../contexts/context')} context - Product Image context
    * @returns {Promise<ProductImg>}
    */
  async createProductImg (parent, args, { context }) {
    const data = args.input
    const productImg = await context.ProductImg.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return productImg
  },

  /**
    * @param {number} ProductImgId - Product image id
    * @param {import('../contexts/context')} context - Product Image context
    * @returns {Boolean} - Delete status
    */
  async deleteProductImg (parent, args, { context }) {
    return await context.ProductImg.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Create order input
    * @param {import('../contexts/context')} context - Order context
    * @returns {Promise<Order>}
    */
  async createOrder (parent, args, { context }) {
    const data = args.input
    const order = await context.Order.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return order
  },

  /**
    * @param {number} OrderId - OrderId
    * @param {import('../contexts/context')} context - Order context
    * @returns {Boolean} - Delete status
    */
  async deleteOrder (parent, args, { context }) {
    return await context.Order.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Create order product attribute input
    * @param {import('../contexts/context')} context - Order Product Attribute context
    * @returns {Promise<OrderProductAttr>}
    */
  async createOrderProductAttr (parent, args, { context }) {
    const data = args.input
    const orderProductAttr = await context.OrderProductAttr.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return orderProductAttr
  },

  /**
    * @param {number} OrderProductAttrId - OrderProductAttrId
    * @param {import('../contexts/context')} context - Order Product Attribute context
    * @returns {Boolean} - Delete status
    */
  async deleteOrderProductAttr (parent, args, { context }) {
    return await context.OrderProductAttr.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Update order product attribute input
    * @param {import('../contexts/context')} context - Order Product Attribute context
    * @returns {Promise<ProductAttr>}
    */
  async updateOrderProductAttr (parent, args, { context }) {
    const data = args.input

    await context.OrderProductAttr.update({ ...data }, {
      where: {
        id: args.id
      }
    })

    return context.OrderProductAttr.findByPk(args.id)
  },

  /**
    * @param {*} args - Create order status input
    * @param {import('../contexts/context')} context - Order Status context
    * @returns {Promise<OrderStatus>}
    */
  async createOrderStatus (parent, args, { context }) {
    const data = args.input
    const orderStatus = await context.OrderStatus.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return orderStatus
  },

  /**
      * @param {number} OrderStatusId - OrderStatusId
      * @param {import('../contexts/context')} context - Order Status context
      * @returns {Boolean} - Delete status
      */
  async deleteOrderStatus (parent, args, { context }) {
    return await context.OrderStatus.destroy({
      where: {
        id: args.id
      }
    })
  },

  /**
    * @param {*} args - Create shipping method input
    * @param {import('../contexts/context')} context - ShippingMethod context
    * @returns {Promise<ShippingMethod>}
    */
  async createShippingMethod (parent, args, { context }) {
    const data = args.input
    const shippingMethod = await context.ShippingMethod.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return shippingMethod
  },

  /**
    * @param {number} ShippingMethodId - ShippingMethodId
    * @param {import('../contexts/context')} context - ShippingMethod context
    * @returns {Boolean} - Delete status
    */
  async deleteShippingMethod (parent, args, { context }) {
    return await context.ShippingMethod.destroy({
      where: {
        id: args.id
      }
    })
  }
}

module.exports = Mutation
