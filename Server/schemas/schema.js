// @ts-check
'use strict'
const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        categories: [Category]!

        category (categoryId: Int!): Category!

        orders: [Order]!

        order (orderId: Int!): Order!

        orderProductAttrs(userId: Int!, orderId: Int!): [OrderProductAttr]!

        orderStatuses: [OrderStatus]!

        products: [Product]!

        product (productId: Int!): Product!

        productAttributes(productId: Int!): [ProductAttr]!

        productActives: [Product]!

        productImgs (productId: Int!): [ProductImg]!

        users: [User]!
        
        user (userId: Int!): User!

        shippingMethods: [ShippingMethod]!

    }
    
    type Mutation {
        exportProduct: ExportProduct!
        exportUser: ExportUser!
        exportOrder: ExportOrder!

        login(input: LoginInput): AuthResponse!
        
        createCategory(input: CreateCategoryInput): Category!

        updateCategory(categoryId:Int!, input: UpdateCategoryInput): Category!
        
        deleteCategory(categoryId:Int!): DeleteCategoryResult!

        createProduct(input: CreateProductInput): Product!

        updateProduct(productId: Int!, input: UpdateProductInput): Product!

        deleteProduct(productId: Int!): DeleteProductResult!
        
        createProductAttr(input: CreateProductAttrInput): ProductAttr!

        updateProductAttr(productAttrId: Int!, input: UpdateProductAttrInput): ProductAttr!

        deleteProductAttr(productAttrId: Int!): DeleteProductAttrResult!

        createProductImg(input: CreateProductImgInput): ProductImg!

        deleteProductImg(productImgId: Int!): DeleteProductImgResult!

        createOrder(input: CreateOrderInput): OrderMutationResult!

        updateOrder(orderId: Int, input: UpdateOrderInput): OrderMutationResult!

        deleteOrder(orderId: Int!): DeleteOrderResult!

        createOrderProductAttr(input: CreateOrderProductAttrInput): OrderProductAttrMutationResult!

        updateOrderProductAttr(orderProductAttrId: Int!, input: UpdateOrderProductAttrInput): OrderProductAttrMutationResult!

        deleteOrderProductAttr(orderProductAttrId: Int!): DeleteOrderProductAttrResult!

        createOrderStatus(input: CreateOrderStatusInput): OrderStatus!

        deleteOrderStatus(orderStatusId: Int!): DeleteOrderStatusResult!

        createShippingMethod(input: CreateShippingMethodInput): ShippingMethod!

        deleteShippingMethod(shippingMethodId: Int!): DeleteShippingMethodResult!

        createUser(input: CreateUserInput): User!

        updateUser(userId: Int!, input: UpdateUserInput): User!

        deleteUser(userId: Int!): DeleteUserResult!
    }

    type AuthResponse {
        token: String!
        user: User!
    }

    type Category {
        id: Int!
        name: String!
        slug: String!
    }

    type DeleteCategoryResult {
        success: Boolean!
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

    type DeleteProductResult {
        success: Boolean!
    }

    type ProductAttr {
        id: Int!
        value: String!
        quantityInStock: Int!
        product: Product!
    }

    type DeleteProductAttrResult {
        success: Boolean!
    }

    type ProductImg {
        id: Int!
        url: String!
        product: Product!
    }

    type DeleteProductImgResult {
        success: Boolean!
    }

    type Order {
        id: Int!
        user: User!
        orderStatus: OrderStatus!
        shippingMethod: ShippingMethod!
        orderProductAttrs: [OrderProductAttr]!
    }

    type OrderMutationResult {
        id: Int!
        userId: Int!
        shippingMethodId: Int!
        orderStatusId: Int!
    }

    type DeleteOrderResult {
        success: Boolean!
    }

    type OrderProductAttr {
        id: Int!
        quantity: Int!
        price: Float!
        productAttr: ProductAttr!
        order: Order!
    }

    type OrderProductAttrMutationResult {
        id: Int!
        orderId: Int!
        productAttrId: Int!
        quantity: Int!
        price: Float!
    }

    type DeleteOrderProductAttrResult {
        success: Boolean!
    }

    type OrderStatus {
        id: Int!
        status: String!
    }

    input CreateOrderStatusInput {
        status: String!
    }

    type DeleteOrderStatusResult {
        success: Boolean!
    }

    type User {
        id: Int!
        name: String!
        userName: String!
        email: String!
        password: String!
        phoneNumber: String!
        address: String!
        isAdmin: Boolean!
        orders: [Order]!
    }

    type DeleteUserResult {
        success: Boolean!
    }

    type ShippingMethod {
        id: Int!
        name: String!
        price:Float!
    }

    type DeleteShippingMethodResult {
        success: Boolean!
    }

    type ExportProduct {
        fileUrl: String!
    }

    type ExportUser {
        fileUrl: String!
    }

    type ExportOrder {
        fileUrl: String!
    }

    input LoginInput {
        email:String!,
        password:String!
    }

    input CreateUserInput {
        name: String!, 
        userName: String!
        email: String!, 
        password: String!, 
        phoneNumber: String!,
        address: String!, 
        isAdmin: Boolean,
    }

    input UpdateUserInput {
        name: String, 
        userName: String,
        password: String,
        phoneNumber: String, 
        address: String,
        isAdmin: Boolean
    }

    input CreateCategoryInput {
        name: String!,
        slug: String!
    }

    input UpdateCategoryInput {
        name: String!,
        slug: String!
    }

    input CreateProductInput {
        name: String!, 
        slug: String!, 
        description: String!,
        price: Float, 
        categoryId: Int!
    }

    input UpdateProductInput {
        name: String, 
        slug: String, 
        price: Float, 
        description: String,
        categoryId: Int
    }
    
    input CreateProductAttrInput {
        value: String!, 
        quantityInStock: Int!, 
        productId:Int!
    }

    input UpdateProductAttrInput {
        value:String!, 
        quantityInStock: Int!
    }

    input CreateProductImgInput {
        url: String!, 
        productId: Int!
    }

    input CreateOrderInput {
        userId: Int!, 
        shippingMethodId: Int!, 
        orderStatusId: Int!
    }
    
    input UpdateOrderInput {
        orderStatusId: Int!
    }

    input CreateOrderProductAttrInput {
        orderId: Int!, 
        productAttrId: Int!, 
        quantity: Int!,
        price: Float!
    }

    input UpdateOrderProductAttrInput {
        price: Float!, 
        quantity: Int!
    }

    input CreateShippingMethodInput {
        name: String!, 
        price: Float!
    }
`

module.exports = typeDefs
