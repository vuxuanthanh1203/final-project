const Category = require('../models').Category;
const Order = require('../models').Order;
const OrderDetail = require('../models').OrderDetail;
const OrderStatus = require('../models').OrderStatus;
const Product = require('../models').Product;
const ProductAttr = require('../models').ProductAttr;
const ProductImg = require('../models').ProductImg;
const ShippingMethod = require('../models').ShippingMethod;
const User = require('../models').User;

const queryData = {
    // Query
    getAllCategories: async (condition = null) => {
        return condition === null ? await Category.findAll() : await Product.findAll(condition)
    },
    getCategoryById: async (id) => await Category.findByPk(id),

    getOrderStatus: async () => await OrderStatus.findAll(),

    getAllProducts: async () => await Product.findAll(),
    getProductById: async (id) => await Product.findByPk(id),
    getProductAttribute: async (id) => await ProductAttr.findByPk(id),

    getAllUsers: async (is_admin = true) => {
        return is_admin === true ? await User.findAll() : "Not Authorized!"
    },
    getUserById: async (id) => await User.findByPk(id),

    getShippingMethod: async () => await ShippingMethod.findAll(),

    getAllProductAttributes: async (id) => await ProductAttributes.findAll({
        where: {
            product_id: id
        }
    }),
    getAllProductImg: async (id) => await ProductImg.findAll({
        where: {
            product_attr_id: id
        }
    }),
    getAllOrders: async (id) => await Order.findAll({
        where: {
            user_id: id
        }
    }),
    getOrderById: async (id) => await Order.findByPk(id),
    getOrderDetails: async (id) => await OrderDetail.findOne({
        where: {
            order_id: id
        }
    }),


    // Mutation
    createCategory: async (args) => await Category.create(args),
    deleteCategory: async (args) => await Category.destroy({
        where: {
            id: args.id
        }
    }),
    updateCategory: async (args) => await Category.update({ name: args.name, slug: args.slug, updated_at: Date.now() }, {
        where: {
            id: args.id
        }
    }),


    createProduct: async (args) => await Product.create(args),
    deleteProduct: async (args) => await Product.destroy({
        where: {
            id: args.id
        }
    }),
    updateProduct: async (args) => await Product.update({
        name: args.name, slug: args.slug,
        short_description: args.short_description, product_img: args.product_img,
        updated_at: Date.now()
    }, {
        where: {
            id: args.id
        }
    }),

    createUser: async (args) => await User.create(args),
    deleteUser: async (args) => await User.destroy({
        where: {
            id: args.id
        }
    }),
    updateUser: async (args) => await User.update({
        name: args.name, phone_number: args.phone_number,
        address: args.address, updated_at: Date.now()
    }, {
        where: {
            id: args.id
        }
    }),

    createProductAttr: async (args) => await ProductAttr.create(args),
    deleteProductAttr: async (args) => await ProductAttr.destroy({
        where: {
            id: args.id
        }
    }),
    updateProductAttr: async (args) => await ProductAttr.update({
        value: args.value, price: args.price,
        quantity_in_stock: args.quantity_in_stock, updated_at: Date.now()
    }, {
        where: {
            id: args.id
        }
    }),

    createProductImg: async (args) => await ProductImg.create(args),
    deleteProductImg: async (args) => await ProductImg.destroy({
        where: {
            id: args.id
        }
    }),

    createOrder: async (args) => await Order.create(args),
    deleteOrder: async (args) => await Order.destroy({
        where: {
            id: args.id
        }
    }),

    createOrderDetails: async (args) => await OrderDetail.create(args),
    deleteOrderDetails: async (args) => await OrderDetail.destroy({
        where: {
            id: args.id
        }
    }),
    updateOrderDetails: async (args) => await OrderDetail.update({
        quantity: args.quantity, price: args.price,
        updated_at: Date.now()
    }, {
        where: {
            id: args.id
        }
    }),


    createOrderStatus: async (args) => await OrderStatus.create(args),
    deleteOrderStatus: async (args) => await OrderStatus.destroy({
        where: {
            id: args.id
        }
    }),

    createShippingMethod: async (args) => await ShippingMethod.create(args),
    deleteShippingMethod: async (args) => await ShippingMethod.destroy({
        where: {
            id: args.id
        }
    }),
}

module.exports = queryData;