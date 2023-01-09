const ProductQueryResolver = {
  Query: {
    /**
      * @param {*} args
      * @param {import('../contexts/context')} context - Product context
      * @returns {Array<import('../models/Product').ProductEntity>}
      */
    async products (parent, args, { context }) {
      const products = await context.Product.scope('+Category').findAll()
      return products.map((item) => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        price: item.price,
        description: item.description,
        category: {
          id: item.Category.id,
          name: item.Category.name,
          slug: item.Category.slug
        }
      }))
    },

    /**
      * @param {number} ProductId - product id
      * @param {import('../contexts/context')} context - Product context
      * @returns {Promise<import('../models/Product').ProductEntity>}
      */
    async product (parent, args, { context }) {
      const product = await context.Product.findByPk(args.id)
      return product
    }
  }

}

module.exports = ProductQueryResolver
