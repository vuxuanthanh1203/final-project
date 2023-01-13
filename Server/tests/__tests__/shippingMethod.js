const resolvers = require('../../resolvers/index')

const parent = null
const context = null

describe('getAllShippingMethod', () => {
  test('get all shipping method', async () => {
    const expected = [
      {
        id: 1,
        name: 'COD',
        price: 15000
      }
    ]
    const result = await resolvers.Query.shippingMethods()
    expect(result).toHaveLength(1)
    expect(result).toMatchObject(expected)
  })
})

describe('createShippingMethod', () => {
  test('Create a new shipping method', async () => {
    const args = {
      input: {
        name: 'test-create',
        price: 15000
      }
    }

    const expected = {
      name: 'test-create',
      price: 15000
    }

    const shippingMethod = await resolvers.Mutation.createShippingMethod(parent, args, context)
    expect(shippingMethod).toMatchObject(expected)
  })
})

describe('deleteShippingMethod', () => {
  test('delete a shipping method', async () => {
    const result = await resolvers.Mutation.deleteShippingMethod(parent, { shippingMethodId: 2 }, context)
    expect(result).toBeTruthy()
  })
})
