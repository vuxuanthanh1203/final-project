const Category = require('../models').Category
const Order = require('../models').Order
const OrderProductAttr = require('../models').OrderProductAttr
const OrderStatus = require('../models').OrderStatus
const Product = require('../models').Product
const ProductAttr = require('../models').ProductAttr
const ProductImg = require('../models').ProductImg
const ShippingMethod = require('../models').ShippingMethod
const User = require('../models').User

const context = {
  Category,
  Order,
  OrderProductAttr,
  OrderStatus,
  Product,
  ProductAttr,
  ProductImg,
  ShippingMethod,
  User
}

module.exports = context
