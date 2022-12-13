const resolver = {
    Query: {
        categories: async (parent, args, { queryData }) => await queryData.getAllCategories(),
        category: async (parent, { id }, { queryData }) => await queryData.getCategoryById(id),

        order: async (parent, { id }, { queryData }) => await queryData.getOrderById(id),
        order_status: async (parent, args, { queryData }) => await queryData.getOrderStatus(),

        products: async (parent, args, { queryData }) => await queryData.getAllProducts(),
        product: async (parent, { id }, { queryData }) => await queryData.getProductById(id),
        product_attribute: async (parent, { id }, { queryData }) => await queryData.getProductAttribute(id),


        users: async (parent, { is_admin }, { queryData }) => await queryData.getAllUsers(is_admin),
        user: async (parent, { id }, { queryData }) => await queryData.getUserById(id),

        shipping_methods: async (parent, args, { queryData }) => await queryData.getShippingMethod()
    },

    Category: {
        products: async ({ id }, args, { queryData }) => await queryData.getAllProducts(id)
    },
    Product: {
        category: async ({ categoryId }, args, { queryData }) => await queryData.getCategoryById(categoryId),
        productAttr: async ({ id }, args, { queryData }) => await queryData.getAllProductAttributes(id)
    },
    ProductAttr: {
        productImg: async ({ id }, args, { queryData }) => await queryData.getAllProductImg(id)
    },
    User: {
        orders: async ({ id }, args, { queryData }) => await queryData.getAllOrders(id)
    },
    Order: {
        orderDetail: async ({ id }, args, { queryData }) => await queryData.getOrderDetail(id)
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