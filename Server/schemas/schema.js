const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        categories: [Category]!
        category (id: Int!): Category!

        orders(id: Int!): [Order]!
        order (id: Int!): Order!

        orderDetail(
            userId: Int!, 
            orderId: Int!
        ): OrderDetail!

        orderStatuses: [OrderStatus]!

        products: [Product]!
        product (id: Int!): Product!
        productAttributes: [ProductAttr]!
        productActives: [Product]!
        productsWithCategory: [Product]!
        users: [User]!
        user (id: Int!): User!

        shippingMethods: [ShippingMethod]!

    }
    
    type Mutation {
        exportProduct: ExportProduct!
        
        createCategory(name: String, slug: String): Category!

        updateCategory(
            id:Int!,
            name:String
        ): Boolean!
        
        deleteCategory(id:Int!): Boolean!

        createProduct(
            name:String!, 
            slug:String!, 
            shortDescription: String!,
            productImg: String!, 
            categoryId: Int!
        ): Product!


        updateProduct(
            id: Int,
            name:String, 
            slug:String, 
            shortDescription: String,
            productImg: String, 
            categoryId: Int
        ): Product!

        deleteProduct(id: Int!): Boolean!
        
        createProductAttr(
            value: String!, 
            price: Float!, 
            quantityInStock: Int!, 
            productId:Int!
        ): ProductAttr!

        updateProductAttr(
            id: Int!, 
            value:String!, 
            price: Float!, 
            quantityInStock: Int!
        ): Boolean!

        deleteProductAttr(id: Int!): Boolean!

        createProductImg(
            url: String!, 
            productId: Int!
        ): ProductImg!

        deleteProductImg(id: Int!): Boolean!

        createOrder(
            userId: Int!, 
            shippingMethodId: Int!, 
            orderStatusId: Int!
        ): Order!

        deleteOrder(id: Int!): Boolean!

        createOrderDetail(
            orderId: Int!, 
            productAttrId: Int!, 
            quantity: Int!,
            price: Float!
        ): OrderDetail!

        updateOrderDetail(
            price: Float!, 
            quantity: Int!
        ): Boolean!

        deleteOrderDetail(id: Int!): Boolean!

        createOrderStatus(status: String!): OrderStatus!
        deleteOrderStatus(id: Int!): Boolean!

        createShippingMethod(
            name: String!, 
            price: Float!
        ): ShippingMethod!

        deleteShippingMethod(id: Int!): Boolean!

        createUser(
            name: String!, 
            email: String!, 
            password: String!, 
            phoneNumber: String!,
            address: String!, 
            isAdmin: Boolean!,
            userName: String!
        ): User!

        updateUser(
            id: Int!, 
            name: String!, 
            phoneNumber: String!, 
            address: String!,
            isAdmin: Boolean!
        ): Boolean!

        deleteUser(id: Int!): Boolean!
    }

    type Category {
        id: Int!
        name: String!
        slug: String!
        products: [Product]
    }

    type Product {
        id: Int!
        name: String!
        slug: String!
        shortDescription: String!
        productImg: String!
        category: Category
        productAttrs: [ProductAttr]
    }

    type ProductAttr {
        id: Int!
        value: String!
        price: Float!
        quantityInStock: Int!
        product: Product
        productImgs: [ProductImg]
    }

    type ProductImg {
        id: Int!
        url: String!
        productAttr: ProductAttr
    }

    type Order {
        id: Int!
        User: User
        orderDetail: OrderDetail
        orderStatus: OrderStatus
    }

    type OrderDetail {
        id: Int!
        quantity: Int!
        price: Float!
        order: Order
    }

    type OrderStatus {
        id: Int!
        status: String!
        orders: [Order]
    }

    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        phoneNumber: String!
        address: String!
        isAdmin: Boolean!
        orders: [Order]
    }

    type ShippingMethod {
        id: Int!
        name: String!
        price:Float!
        orders: [Order]
    }

    type ExportProduct {
        fileUrl: String!
    }
`

module.exports = typeDefs
