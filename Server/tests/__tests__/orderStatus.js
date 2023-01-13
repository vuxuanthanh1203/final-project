const resolvers = require('../../resolvers/index')

const parent = null
const context = null

describe('getAllOrderStatus', () => {
  test('get all order status', async () => {
    const expected = [
      { id: 1, status: 'pending' },
      { id: 2, status: 'shipping' },
      { id: 3, status: 'success' },
      { id: 4, status: 'cancel' }
    ]
    const received = await resolvers.Query.orderStatuses()

    expect(received).toHaveLength(4)
    expect(received).toMatchObject(expected)
  })
})

describe('createOrderStatus', () => {
  test('Create a new order status', async () => {
    const args = {
      input: {
        status: 'test'
      }
    }

    const expected = {
      status: 'test'
    }

    const received = await resolvers.Mutation.createOrderStatus(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteOrderStatus', () => {
  test('delete a order status', async () => {
    const args = {
      orderStatusId: 3
    }
    const received = await resolvers.Mutation.deleteOrderStatus(parent, args, context)

    expect(received).toBeTruthy()
  })
})
