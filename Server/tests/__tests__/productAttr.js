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
    const result = await resolvers.Query.productAttributes(parent, { productId: 1 }, context)
    expect(result).toHaveLength(3)
    expect(result).toMatchObject(expected)
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

    const productAttr = await resolvers.Mutation.createProductAttr(parent, args, context)
    expect(productAttr).toMatchObject(expected)
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
    const productAttr = await ProductAttr.findByPk(10)

    expect(productAttr).toMatchObject(expected)
  })
})

describe('deleteProductAttr', () => {
  test('delete an attribute of the product', async () => {
    const result = resolvers.Mutation.deleteProductAttr(parent, { productAttrId: 10 }, context)
    expect(result).toBeTruthy()
  })
})
