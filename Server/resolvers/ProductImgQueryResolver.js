const ProductImgQueryResolver = {
  Query: {
    /**
      * @param {number} productId - Product id
      * @param {import('../contexts/context')} context - ProductImg context
      * @returns {Array<import('../models/ProductImg')>}
      */
    async productImgs (parent, args, { context }) {
      const productImgs = await context.ProductImg.findAll({
        where: {
          product_id: args.productId
        }
      })
      return productImgs.map(item => ({
        id: item.id,
        url: item.url,
        product: {
          id: item.Product.id,
          name: item.Product.name,
          description: item.Product.description
        }
      }))
    }
  }
}

module.exports = ProductImgQueryResolver
