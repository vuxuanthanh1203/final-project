const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        categories: [Category]!
        category (id: Int!): Category!

        orders(id: Int!): [Order]!
        order (id: Int!): Order!
        order_detail(user_id: Int!, order_id: Int!): OrderDetails!
        order_status: [OrderStatus]!

        products: [Product]!
        product (id: Int!): Product!
        product_attribute: [ProductAttr]!

        users: [User]!
        user (id: Int!): User!

        shipping_methods: [ShippingMethod]!
    }

    type Mutation {
        createCategory(name: String!): Category!
        updateCategory(id:Int!,name:String): Boolean!
        deleteCategory(id:Int!): Boolean!

        createProduct(name: String!, des: String!, categoryId: Int!): Product!
        updateProduct(id: Int!, name:String!, slug:String!, short_description: String!,
            product_img: String!, categoryId: Int!): Boolean!
        deleteProduct(id: Int!): Boolean!
        
        createProductAttr(value: String!, price: Float!, quantity_in_stock: Int!, productId:Int!): ProductAttr!
        updateProductAttr(id: Int!, value:String!, price: Float!, quantity_in_stock: Int!): Boolean!
        deleteProductAttr(id: Int!): Boolean!

        createProductImg(url: String!, productId: Int!):ProductImg!
        deleteProductImg(id: Int!): Boolean!

        createOrder(user_id: Int!, shipping_method_id: Int!, order_status_id: Int!): Order!
        deleteOrder(id: Int!): Boolean!

        createOrderDetails(order_id: Int!, product_attr_id: Int!, quantity: Int!,
            price: Float!): OrderDetails!
        updateOrderDetails(price: Float!, quantity: Int!): Boolean!
        deleteOrderDetails(id: Int!): Boolean!

        createOrderStatus(status: String!): OrderStatus!
        deleteOrderStatus(id: Int!): Boolean!

        createShippingMethod(name: String!, price: Float!): ShippingMethod!
        deleteShippingMethod(id: Int!): Boolean!

        createUser(name: String!, email: String!, password: String!, phone_number: String!,
            address: String!, is_admin: Boolean!): User!
        updateUser(id: Int!, name: String!, phone_number: String!, address: String!,
            is_admin: Boolean!): Boolean!
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
        short_description: String!
        product_img: String!
        category: Category
        productAttr: [ProductAttr]
    }

    type ProductAttr {
        id: Int!
        value: String!
        price: Float!
        quantity_in_stock: Int!
        Product: [Product]
        productImg: [ProductImg]
    }

    type ProductImg {
        id: Int!
        url: String!
        ProductAttr: ProductAttr
    }

    type Order {
        id: Int!
        User: User
        orderDetail: OrderDetails
        OrderStatus: OrderStatus
    }

    type OrderDetails {
        id: Int!
        quantity: Int!
        price: Float!
        Order: Order
    }

    type OrderStatus {
        id: Int!
        status: String!
        Order: [Order]
    }

    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        phone_number: String!
        address: String!
        is_admin: Boolean!
        orders: [Order]
    }

    type ShippingMethod {
        id: Int!
        name: String!
        price:Float!
        Order: [Order]
    }
`

module.exports = typeDefs;