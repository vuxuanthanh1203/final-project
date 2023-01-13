const resolvers = require('../../resolvers/index')
const OrderStatus = require('../../models').OrderStatus

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

    await resolvers.Mutation.createOrderStatus(parent, args, context)
    const received = await OrderStatus.findByPk(5)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteOrderStatus', () => {
  test('delete a order status', async () => {
    const received = await resolvers.Mutation.deleteOrderStatus(parent, { orderStatusId: 3 }, context)
    expect(received).toBeTruthy()
  })
})
