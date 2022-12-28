const Category = require('../models').Category
const Order = require('../models').Order
const OrderProductAttr = require('../models').OrderProductAttr
const OrderStatus = require('../models').OrderStatus
const Product = require('../models').Product
const ProductAttr = require('../models').ProductAttr
const ProductImg = require('../models').ProductImg
const ShippingMethod = require('../models').ShippingMethod
const User = require('../models').User

const queryData = {
  // Scope
  checkProuctStatus: async () => await Product.scope('checkStatus').findAll(),

  // Query
  getAllCategories: async (condition = null) => {
    return condition === null ? await Category.findAll() : await Product.findAll(condition)
  },
  getCategoryById: async (id) => await Category.findByPk(id),

  getOrderStatus: async () => await OrderStatus.findAll(),

  getAllProducts: async () => {
    const products = await Product.scope('+category').findAll()
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
    // console.log(products)
  },

  getProductById: async (id) => await Product.findByPk(id),

  getAllUsers: async () => await User.findAll(),

  getUserById: async (id) => await User.findByPk(id),

  getShippingMethod: async () => await ShippingMethod.findAll(),

  getAllProductAttributes: async (id) => await ProductAttr.findAll({
    where: {
      product_id: id
    }
  }),
  getAllProductImgs: async (id) => await ProductImg.findAll({
    where: {
      product_id: id
    }
  }),
  getAllOrders: async () => {
    const orders = await Order.scope('+User+ShippingMethod+OrderStatus++orderProductAttrs+++productAttr').findAll()
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
    // console.log(typeof (orders))
  },

  getOrderProductAttr: async (args) => {
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
    // console.log(typeof (orderProductAttrs))
  },
  getOrderById: async (id) => await Order.findByPk(id),

  // Mutation
  createCategory: async (args) => await Category.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteCategory: async (args) => await Category.destroy({
    where: {
      id: args.id
    }
  }),
  updateCategory: async (args) => {
    await Category.update({ ...args }, {
      where: {
        id: args.id
      }
    })
    return Category.findByPk(args.id)
  },

  createProduct: async (args) => await Product.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteProduct: async (args) => await Product.destroy({
    where: {
      id: args.id
    }
  }),
  updateProduct: async (args) => {
    await Product.update({ ...args }, {
      where: {
        id: args.id
      }
    })
    return Product.findByPk(args.id)
  },

  createUser: async (args) => await User.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteUser: async (args) => await User.destroy({
    where: {
      id: args.id
    }
  }),
  updateUser: async (args) => {
    await User.update({ ...args }, {
      where: {
        id: args.id
      }
    })
    return User.findByPk(args.id)
  },

  createProductAttr: async (args) => await ProductAttr.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteProductAttr: async (args) => await ProductAttr.destroy({
    where: {
      id: args.id
    }
  }),
  updateProductAttr: async (args) => {
    await ProductAttr.update({ ...args }, {
      where: {
        id: args.id
      }
    })
    return ProductAttr.findByPk(args.id)
  },

  createProductImg: async (args) => await ProductImg.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteProductImg: async (args) => await ProductImg.destroy({
    where: {
      id: args.id
    }
  }),

  createOrder: async (args) => await Order.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteOrder: async (args) => await Order.destroy({
    where: {
      id: args.id
    }
  }),

  createOrderProductAttr: async (args) => await OrderProductAttr.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteOrderProductAttr: async (args) => await OrderProductAttr.destroy({
    where: {
      id: args.id
    }
  }),
  updateOrderProductAttr: async (args) => {
    await OrderProductAttr.update({ ...args }, {
      where: {
        id: args.id
      }
    })
    return OrderProductAttr.findByPk(args.id)
  },

  createOrderStatus: async (args) => await OrderStatus.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteOrderStatus: async (args) => await OrderStatus.destroy({
    where: {
      id: args.id
    }
  }),

  createShippingMethod: async (args) => await ShippingMethod.create({
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  }),
  deleteShippingMethod: async (args) => await ShippingMethod.destroy({
    where: {
      id: args.id
    }
  })
}

module.exports = queryData
