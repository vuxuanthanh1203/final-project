const resolvers = require('../../resolvers/index')
const Order = require('../../models').Order

const parent = null
const context = null

describe('getAllOrders', () => {
  test('get all Orders', async () => {
    const expected = [
      {
        id: 1,
        user: { name: 'user1', address: 'HN' },
        orderProductAttrs: [
          { id: 1, quantity: 3, price: 567000, productAttr: { id: 1, value: 'S' } },
          { id: 2, quantity: 1, price: 189000, productAttr: { id: 2, value: 'M' } }
        ],
        shippingMethod: { name: 'COD' }
      },
      {
        id: 2,
        user: { name: 'user1', address: 'HN' },
        orderProductAttrs: [],
        shippingMethod: { name: 'COD' }
      },
      {
        id: 3,
        user: { name: 'user1', address: 'HN' },
        orderProductAttrs: [],
        shippingMethod: { name: 'COD' }
      },
      {
        id: 4,
        user: { name: 'user1', address: 'HN' },
        orderProductAttrs: [],
        shippingMethod: { name: 'COD' }
      }
    ]
    const received = await resolvers.Query.orders()

    expect(received).toHaveLength(4)
    expect(received).toMatchObject(expected)
  })
})

describe('getOrderById', () => {
  test('get order by id return object', async () => {
    const args = {
      orderId: 1
    }

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

    const received = await resolvers.Query.order(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('getOrderById', () => {
  test('get order by id return null', async () => {
    const args = {
      orderId: 20
    }

    const received = await resolvers.Query.order(parent, args, context)

    expect(received).toBeNull()
  })
})

describe('createOrder', () => {
  test('Create a new order', async () => {
    const args = {
      input: {
        userId: 3,
        shippingMethodId: 1,
        OrderStatusId: 1
      }
    }

    const expected = {
      userId: 3,
      shippingMethodId: 1,
      OrderStatusId: 1
    }

    const received = await resolvers.Mutation.createOrder(parent, args, context)

    expect(received).toMatchObject(expected)
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

    await resolvers.Mutation.updateOrder(parent, args, context)
    const received = await Order.findByPk(5)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteOrder', () => {
  test('delete order', async () => {
    const args = {
      orderId: 5
    }

    const received = await resolvers.Mutation.deleteOrder(parent, args, context)

    expect(received).toBeTruthy()
  })
})
