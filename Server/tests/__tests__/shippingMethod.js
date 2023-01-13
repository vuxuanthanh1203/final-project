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
    const received = await resolvers.Query.shippingMethods()

    expect(received).toHaveLength(1)
    expect(received).toMatchObject(expected)
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

    const received = await resolvers.Mutation.createShippingMethod(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteShippingMethod', () => {
  test('delete a shipping method', async () => {
    const args = {
      shippingMethodId: 2
    }

    const received = await resolvers.Mutation.deleteShippingMethod(parent, args, context)

    expect(received).toBeTruthy()
  })
})
