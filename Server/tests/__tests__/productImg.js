const resolvers = require('../../resolvers/index')
const ProductImg = require('../../models').ProductImg

const parent = null
const context = null

describe('getAllProductImages', () => {
  test('get all images of the product', async () => {
    const result = await resolvers.Query.productImgs(parent, { productId: 1 }, context)
    expect(result).toHaveLength(2)
  })
})

describe('getAllProductImages', () => {
  test('get all images of the product return null', async () => {
    const result = await resolvers.Query.productImgs(parent, { productId: 1 }, context)
    expect(result).not.toBeNull()
  })
})

describe('createProductImg', () => {
  test('Create a new attribute of th product', async () => {
    const args = {
      input: {
        url: '../public/assets/images/products/product-09 (1).jpg',
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
    const expected = {
      url: '../public/assets/images/products/product-09 (1).jpg',
      productId: 7
    }

    await ProductImg.create(args.input)
    const productImg = await ProductImg.findByPk(13)
    expect(productImg).toMatchObject(expected)
  })
})

describe('deleteProductImg', () => {
  test('delete an image of the product', async () => {
    const result = await ProductImg.destroy({
      where: { id: 13 }
    })
    expect(result).toBeTruthy()
  })
})
