const resolver = {
    Query: {
        categories: async (parent, args, { queryData }) => await queryData.getAllCategory(),
        category: async (parent, { id }, { queryData }) => await queryData.getCategoryById(id),

        orders: async (parent, args, { queryData }) => await queryData.getAllCategory(),
        orderDetails: async (parent, { id }, { queryData }) => await queryData.getCategoryById(id),
        orderStatus: async (parent, { id }, { queryData }) => await queryData.getOrderStatus(),

        products: async (parent, args, { queryData }) => await queryData.getAllProducts(),
        product: async (parent, { id }, { queryData }) => await queryData.getProductById(id),
        productAttributes: async (parent, { id }, { queryData }) => await queryData.getProductAttr(id),

        users: async (parent, { is_admin }, { queryData }) => await queryData.getAllUsers(is_admin),
        user: async (parent, { id }, { queryData }) => await queryData.getUserById(id),

        shipping_methods: async (parent, args, { queryData }) => await queryData.getShippingMethod()
    },

    Mutation: {
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

        createOrderDetails: async (parent, args, { queryData }) => await queryData.createOrderDetails(args),
        updateOrderDetails: async (parent, args, { queryData }) => await queryData.updateOrderDetails(args),
        deleteOrderDetails: async (parent, args, { queryData }) => await queryData.deleteOrderDetails(args),

        createUser: async (parent, args, { queryData }) => await queryData.createUser(args),
        updateUser: async (parent, args, { queryData }) => await queryData.updateUser(args),
        deleteUser: async (parent, args, { queryData }) => await queryData.deleteUser(args)
    }

}

module.exports = resolver;