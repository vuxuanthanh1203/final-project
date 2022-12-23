const exportData = require('../export/exportData')

const resolver = {
  Query: {
    categories: async (parent, args, { queryData }) => await queryData.getAllCategories(),
    category: async (parent, { id }, { queryData }) => await queryData.getCategoryById(id),

    order: async (parent, { id }, { queryData }) => await queryData.getOrderById(id),
    orderStatuses: async (parent, args, { queryData }) => await queryData.getOrderStatus(),

    products: async (parent, args, { queryData }) => await queryData.getAllProducts(),
    product: async (parent, { id }, { queryData }) => await queryData.getProductById(id),
    productAttributes: async (parent, { id }, { queryData }) => await queryData.getProductAttribute(id),

    users: async (parent, args, { queryData }) => await queryData.getAllUsers(),
    user: async (parent, { id }, { queryData }) => await queryData.getUserById(id),

    shippingMethods: async (parent, args, { queryData }) => await queryData.getShippingMethod(),

    // Scope
    productActives: async (parent, args, { queryData }) => await queryData.checkProuctStatus(),
    productsWithCategory: async (parent, args, { queryData }) => await queryData.getProductsWithCategory()

  },

  Mutation: {
    // Export Data
    exportProduct: exportData,

    createCategory: async (parent, args, { queryData }) => await queryData.createCategory(args),
    deleteCategory: async (parent, args, { queryData }) => await queryData.deleteCategory(args),
    updateCategory: async (parent, args, { queryData }) => await queryData.updateCategory(args),

    createProduct: async (parent, args, { queryData }) => await queryData.createProduct(args),
    updateProduct: async (parent, args, { queryData }) => await queryData.updateProduct(args),
    deleteProduct: async (parent, args, { queryData }) => await queryData.deleteProduct(args),

    createProductAttr: async (parent, args, { queryData }) => await queryData.createProductAttr(args),
    updateProductAttr: async (parent, args, { queryData }) => await queryData.updateProductAttr(args),
    deleteProductAttr: async (parent, args, { queryData }) => await queryData.deleteProductAttr(args),

    createProductImg: async (parent, args, { queryData }) => await queryData.createProductImg(args),
    deleteProductImg: async (parent, args, { queryData }) => await queryData.deleteProductImg(args),

    createOrderStatus: async (parent, args, { queryData }) => await queryData.createOrderStatus(args),
    deleteOrderStatus: async (parent, args, { queryData }) => await queryData.deleteOrderStatus(args),

    createShippingMethod: async (parent, args, { queryData }) => await queryData.createShippingMethod(args),
    deleteShippingMethod: async (parent, args, { queryData }) => await queryData.deleteShippingMethod(args),

    createOrder: async (parent, args, { queryData }) => await queryData.createOrder(args),
    deleteOrder: async (parent, args, { queryData }) => await queryData.deleteOrder(args),

    createOrderDetail: async (parent, args, { queryData }) => await queryData.createOrderDetail(args),
    updateOrderDetail: async (parent, args, { queryData }) => await queryData.updateOrderDetail(args),
    deleteOrderDetail: async (parent, args, { queryData }) => await queryData.deleteOrderDetail(args),

    createUser: async (parent, args, { queryData }) => await queryData.createUser(args),
    updateUser: async (parent, args, { queryData }) => await queryData.updateUser(args),
    deleteUser: async (parent, args, { queryData }) => await queryData.deleteUser(args)
  }

}

module.exports = resolver
