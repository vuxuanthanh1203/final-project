const resolvers = require('../../resolvers/index')
const OrderStatus = require('../../models').OrderStatus

describe('getAllOrderStatus', () => {
  test('get all order status', async () => {
    const result = await resolvers.Query.orderStatuses()
    expect(result).toHaveLength(4)
  })
})

describe('getAllOrderStatus', () => {
  test('get all order status return null', async () => {
    const result = await resolvers.Query.orders()
    expect(result).not.toBeNull()
  })
})

describe('createOrderStatus', () => {
  test('Create a new order status', async () => {
    const args = {
      input: {
        status: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      status: 'test'
    }

    await OrderStatus.create(args.input)
    const orderStatus = await OrderStatus.findByPk(5)
    expect(orderStatus).toMatchObject(expected)
  })
})

describe('deleteOrderStatus', () => {
  test('delete a order status', async () => {
    const result = await OrderStatus.destroy({
      where: { id: 5 }
    })
    expect(result).toBeTruthy()
  })
})
