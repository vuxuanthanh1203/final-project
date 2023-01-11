const resolvers = require('../../resolvers/index')
const ShippingMethod = require('../../models').ShippingMethod

describe('getAllShippingMethod', () => {
  test('get all shipping method', async () => {
    const result = await resolvers.Query.shippingMethods()
    expect(result).toHaveLength(1)
  })
})

describe('getAllShippingMethod', () => {
  test('get all shipping method return null', async () => {
    const result = await resolvers.Query.shippingMethods()
    expect(result).not.toBeNull()
  })
})

describe('createShippingMethod', () => {
  test('Create a new shipping method', async () => {
    const args = {
      input: {
        name: 'test-create',
        price: 15000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      name: 'test-create',
      price: 15000
    }

    await ShippingMethod.create(args.input)
    const shippingMethod = await ShippingMethod.findByPk(2)
    expect(shippingMethod).toMatchObject(expected)
  })
})

describe('deleteShippingMethod', () => {
  test('delete a shipping method', async () => {
    const result = await ShippingMethod.destroy({
      where: { id: 2 }
    })
    expect(result).toBeTruthy()
  })
})
