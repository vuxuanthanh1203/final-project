const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        categories: [Category]!

        category (id: Int!): Category!

        orders: [Order]!

        orderProductAttr(userId: Int!, orderId: Int!): [OrderProductAttr]!

        orderStatuses: [OrderStatus]!

        products: [Product]!

        product (id: Int!): Product!

        productAttributes(productId: Int!): [ProductAttr]!

        productActives: [Product]!

        productImgs (productId: Int!): [ProductImg]!

        users: [User]!
        
        user (id: Int!): User!

        shippingMethods: [ShippingMethod]!

    }
    
    type Mutation {
        exportProduct: String!
        exportUser: String!
        exportOrder: String!

        login(input: LoginInput): AuthResponse!
        
        createCategory(input: CreateCategoryInput): Category!

        updateCategory(id:Int!, input: UpdateCategoryInput): Category!
        
        deleteCategory(id:Int!): Boolean!

        createProduct(input: CreateProductInput): Product!

        updateProduct(id: Int, input: UpdateProductInput): Product!

        deleteProduct(id: Int!): Boolean!
        
        createProductAttr(input: CreateProductAttrInput): ProductAttr!

        updateProductAttr(id: Int!, input: UpdateProductAttrInput): ProductAttr!

        deleteProductAttr(id: Int!): Boolean!

        createProductImg(input: CreateProductImgInput): ProductImg!

        deleteProductImg(id: Int!): Boolean!

        createOrder(input: CreateOrderInput): Order!

        deleteOrder(id: Int!): Boolean!

        createOrderProductAttr(input: CreateOrderAttrInput): OrderProductAttr!

        updateOrderProductAttr(input: UpdateOrderAttrInput): OrderProductAttr!

        deleteOrderProductAttr(id: Int!): Boolean!

        createOrderStatus(status: String!): OrderStatus!

        deleteOrderStatus(id: Int!): Boolean!

        createShippingMethod(input: CreateShippingMethodInput): ShippingMethod!

        deleteShippingMethod(id: Int!): Boolean!

        createUser(input: CreateUserInput): AuthResponse!

        updateUser(id: Int!, input: UpdateUserInput): User!

        deleteUser(id: Int!): Boolean!
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
        phoneNumber: String, 
        address: String,
        isAdmin: Boolean
    }

    input CreateCategoryInput {
        name: String,
        slug: String
    }

    input UpdateCategoryInput {
        name: String!
    }

    input CreateProductInput {
        name:String!, 
        slug:String!, 
        description: String!,
        price: Float, 
        categoryId: Int!
    }

    input UpdateProductInput {
        name:String, 
        slug:String, 
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

    input CreateOrderAttrInput {
        orderId: Int!, 
        productAttrId: Int!, 
        quantity: Int!,
        price: Float!
    }

    input UpdateOrderAttrInput {
        price: Float!, 
        quantity: Int!
    }

    input CreateShippingMethodInput {
        name: String!, 
        price: Float!
    }
`

module.exports = typeDefs
