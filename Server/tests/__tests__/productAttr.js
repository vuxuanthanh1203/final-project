const resolvers = require('../../resolvers/index')
const ProductAttr = require('../../models').ProductAttr

const parent = null
const context = null

describe('getAllProductAttributes', () => {
  test('get all attributes of the product', async () => {
    const expected = [
      { id: 1, value: 'S', product: { name: 'Áo thun Dinosaur 01' } },
      { id: 2, value: 'M', product: { name: 'Áo thun Dinosaur 01' } },
      { id: 3, value: 'L', product: { name: 'Áo thun Dinosaur 01' } }
    ]

    const received = await resolvers.Query.productAttributes(parent, { productId: 1 }, context)

    expect(received).toHaveLength(3)
    expect(received).toMatchObject(expected)
  })
})

describe('createProductAttr', () => {
  test('Create a new attribute of the product', async () => {
    const args = {
      input: {
        value: 'test',
        quantityInStock: 100,
        productId: 3
      }
    }

    const expected = {
      value: 'test',
      quantityInStock: 100,
      productId: 3
    }

    const received = await resolvers.Mutation.createProductAttr(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('updateProductAttr', () => {
  test('update an attribute of the product', async () => {
    const args = {
      productAttrId: 10,
      input: {
        value: 'test-update',
        quantityInStock: 30
      }
    }

    const expected = {
      value: 'test-update',
      quantityInStock: 30,
      productId: 3
    }

    await resolvers.Mutation.updateProductAttr(parent, args, context)
    const received = await ProductAttr.findByPk(args.productAttrId)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteProductAttr', () => {
  test('delete an attribute of the product', async () => {
    const args = {
      productAttrId: 10
    }

    const received = resolvers.Mutation.deleteProductAttr(parent, args, context)

    expect(received).toBeTruthy()
  })
})
