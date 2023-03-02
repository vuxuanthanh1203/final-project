// @ts-check
'use strict'

const { mergeResolvers } = require('@graphql-tools/merge')
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js')

const customResolvers = {
  Upload: GraphQLUpload
}

// Import Query
const CategoryQueryResolver = require('./CategoryQueryResolver')
const OrderQueryResolver = require('./OrderQueryResolver')
const OrderProductAttrQueryResolver = require('./OrderProductAttrQueryResolver')
const OrderStatusQueryResolver = require('./OrderStatusQueryResolver')
const ProductAttrQueryResolver = require('./ProductAttrQueryResolver')
const ProductImgQueryResolver = require('./ProductImgQueryResolver')
const ProductQueryResolver = require('./ProductQueryResolver')
const ShippingMethodQueryResolver = require('./ShippingMethodQueryResolver')
const UserQueryResolver = require('./UserQueryResolver')

// Import Mutation
const CategoryMutationResolver = require('./CategoryMutationResolver')
const OrderMutationResolver = require('./OrderMutationResolver')
const OrderProductAttrMutationResolver = require('./OrderProductAttrMutationResolver')
const OrderStatusMutationResolver = require('./OrderStatusMutationResolver')
const ProductAttrMutationResolver = require('./ProductAttrMutationResolver')
const ProductImgMutationResolver = require('./ProductImgMutationResolver')
const ProductMutationResolver = require('./ProductMutationResolver')
const ShippingMethodMutationResolver = require('./ShippingMethodMutationResolver')
const UserMutationResolver = require('./UserMutationResolver')

const ExportUserMutationResolver = require('./ExportUserMutationResolver')
const ExportProductMutationResolver = require('./ExportProductMutationResolver')
const ExportOrderMutationResolver = require('./ExportOrderMutationResolver')

const ImportUserMutationResolver = require('./ImportUserMutationResolver')

const UploadImageResolver = require('./UploadImageResolver')

const resolvers = [
  customResolvers,
  CategoryQueryResolver,
  OrderQueryResolver,
  OrderProductAttrQueryResolver,
  OrderStatusQueryResolver,
  ProductAttrQueryResolver,
  ProductImgQueryResolver,
  ProductQueryResolver,
  ShippingMethodQueryResolver,
  UserQueryResolver,
  CategoryMutationResolver,
  OrderMutationResolver,
  OrderProductAttrMutationResolver,
  OrderStatusMutationResolver,
  ProductAttrMutationResolver,
  ProductImgMutationResolver,
  ProductMutationResolver,
  ShippingMethodMutationResolver,
  UserMutationResolver,
  ExportUserMutationResolver,
  ExportProductMutationResolver,
  ExportOrderMutationResolver,
  ImportUserMutationResolver,
  UploadImageResolver
]

module.exports = mergeResolvers(resolvers)
