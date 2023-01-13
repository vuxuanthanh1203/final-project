const resolvers = require('../../resolvers/index')
const ProductAttr = require('../../models').ProductAttr

const parent = null
const context = null

describe('getAllProductAttributes', () => {
  test('get all attributes of the product', async () => {
    const result = await resolvers.Query.productAttributes(parent, { productId: 1 }, context)
    expect(result).toHaveLength(3)
  })
})

describe('getAllProductAttributes', () => {
  test('get all attributes of the product return null', async () => {
    const result = await resolvers.Query.productAttributes(parent, { productId: 1 }, context)
    expect(result).not.toBeNull()
  })
})

describe('createProductAttr', () => {
  test('Create a new attribute of the product', async () => {
    const args = {
      input: {
        value: 'test',
        quantityInStock: 100,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      value: 'test',
      quantityInStock: 100,
      productId: 3
    }

    await ProductAttr.create(args.input)
    const productAttr = await ProductAttr.findByPk(10)
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
    await ProductAttr.update(args.input, {
      where: { id: args.productAttrId }
    })
    const productAttr = await ProductAttr.findByPk(10)
    expect(productAttr).toMatchObject(expected)
  })
})

describe('deleteProductAttr', () => {
  test('delete an attribute of the product', async () => {
    const result = await ProductAttr.destroy({
      where: { id: 10 }
    })
    expect(result).toBeTruthy()
  })
})
