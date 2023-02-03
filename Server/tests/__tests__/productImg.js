const resolvers = require('../../resolvers/index')

const parent = null
const context = null

describe('getAllProductImages', () => {
  test('get all images of the product', async () => {
    const expected = [
      {
        id: 1,
        url: '../public/assets/images/products/product-01 (1).jpg',
        product: {
          name: 'Áo thun Dinosaur 01'
        }
      },
      {
        id: 2,
        url: '../public/assets/images/products/product-01 (2).jpg',
        product: {
          name: 'Áo thun Dinosaur 01'
        }
      }
    ]

    const received = await resolvers.Query.productImgs(parent, { productId: 1 }, context)

    expect(received).toHaveLength(2)
    expect(received).toMatchObject(expected)
  })
})

describe('createProductImg', () => {
  test('Create a new attribute of th product', async () => {
    const args = {
      input: {
        url: '../public/assets/images/products/product-09 (1).jpg',
        productId: 7
      }
    }
    const expected = {
      url: '../public/assets/images/products/product-09 (1).jpg',
      productId: 7
    }

    const received = await resolvers.Mutation.createProductImg(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteProductImg', () => {
  test('delete an image of the product', async () => {
    const args = {
      productImgId: 7
    }

    const received = await resolvers.Mutation.deleteProductImg(parent, args, context)

    expect(received).toBeTruthy()
  })
})
