const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        categories: [Category]!
        category (id: Int!): Category!

        orders: [Order]!

        orderProductAttr(
            userId: Int!, 
            orderId: Int!
        ): [OrderProductAttr]!

        orderStatuses: [OrderStatus]!

        products: [Product]!
        product (id: Int!): Product!

        productAttributes(id: Int!): [ProductAttr]!
        productActives: [Product]!

        productImgs (id: Int!): [ProductImg]!

        users: [User]!
        user (id: Int!): User!

        shippingMethods: [ShippingMethod]!

    }
    
    type Mutation {
        exportProduct: String!
        
        createCategory(name: String, slug: String): Category!

        updateCategory(
            id:Int!,
            name:String
        ): Boolean!
        
        deleteCategory(id:Int!): Boolean!

        createProduct(
            name:String!, 
            slug:String!, 
            description: String!,
            price: Float, 
            categoryId: Int!
        ): Product!


        updateProduct(
            id: Int,
            name:String, 
            slug:String, 
            price: Float, 
            description: String,
            categoryId: Int
        ): Product!

        deleteProduct(id: Int!): Boolean!
        
        createProductAttr(
            value: String!, 
            quantityInStock: Int!, 
            productId:Int!
        ): ProductAttr!

        updateProductAttr(
            id: Int!, 
            value:String!, 
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

        createOrderProductAttr(
            orderId: Int!, 
            productAttrId: Int!, 
            quantity: Int!,
            price: Float!
        ): OrderProductAttr!

        updateOrderProductAttr(
            price: Float!, 
            quantity: Int!
        ): Boolean!

        deleteOrderProductAttr(id: Int!): Boolean!

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
        products: [Product]!
    }

    type Product {
        id: Int!
        name: String!
        slug: String!
        price: Float!
        description: String!
        category: Category!
        productAttrs: [ProductAttr]!
        productImgs: [ProductImg]!
    }

    type ProductAttr {
        id: Int!
        value: String!
        quantityInStock: Int!
        product: Product!
    }

    type ProductImg {
        id: Int!
        url: String!
        product: Product!
    }

    type Order {
        id: Int!
        user: User!
        orderProductAttrs: [OrderProductAttr]!
        orderStatus: OrderStatus!
        shippingMethod: ShippingMethod!
    }

    type OrderProductAttr {
        id: Int!
        quantity: Int!
        price: Float!
        productAttr: ProductAttr!
        order: Order!
    }

    type OrderStatus {
        id: Int!
        status: String!
        orders: [Order]!
    }

    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        phoneNumber: String!
        address: String!
        isAdmin: Boolean!
        orders: [Order]!
    }

    type ShippingMethod {
        id: Int!
        name: String!
        price:Float!
        orders: [Order]!
    }

    type ExportProduct {
        fileUrl: String!
    }
`

module.exports = typeDefs
