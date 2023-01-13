const resolvers = require('../../resolvers/index')
const Order = require('../../models').Order

const parent = null
const context = null

describe('getAllOrders', () => {
  test('get all Orders', async () => {
    const result = await resolvers.Query.orders()
    expect(result).toHaveLength(4)
  })
})

describe('getAllOrders', () => {
  test('get all orders return null', async () => {
    const result = await resolvers.Query.orders()
    expect(result).not.toBeNull()
  })
})

describe('getOrderById', () => {
  test('get order by id return object', async () => {
    const expected = {
      id: 1,
      user: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        phoneNumber: '0999999999',
        address: 'HN'
      },
      orderStatus: { id: 1, status: 'pending' },
      shippingMethod: { id: 1, name: 'COD', price: 15000 },
      orderProductAttrs: [
        { id: 1, quantity: 3, price: 567000, productAttr: { value: 'S' } },
        { id: 2, quantity: 1, price: 189000, productAttr: { value: 'M' } }
      ]
    }
    const result = await resolvers.Query.order(parent, { orderId: 1 }, context)
    expect(result).toMatchObject(expected)
  })
})

describe('getOrderById', () => {
  test('get order by id return null', async () => {
    const result = await resolvers.Query.order(parent, { orderId: 20 }, context)
    expect(result).toBeNull()
  })
})

describe('createOrder', () => {
  test('Create a new order', async () => {
    const args = {
      input: {
        userId: 3,
        shippingMethodId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      userId: 3,
      shippingMethodId: 1,
      OrderStatusId: 1
    }

    await Order.create(args.input)
    const order = await Order.findByPk(5)
    expect(order).toMatchObject(expected)
  })
})

describe('updateOrder', () => {
  test('update order', async () => {
    const args = {
      orderId: 5,
      input: {
        orderStatusId: 3
      }
    }

    const expected = {
      userId: 3,
      shippingMethodId: 1,
      orderStatusId: 3
    }

    await Order.update(args.input, {
      where: { id: args.orderId }
    })
    const order = await Order.findByPk(5)
    expect(order).toMatchObject(expected)
  })
})

describe('deleteOrder', () => {
  test('delete order', async () => {
    const result = await Order.destroy({
      where: {
        id: 5
      }
    })
    expect(result).toBeTruthy()
  })
})
