const resolvers = require('../../resolvers/index')
const OrderProductAttr = require('../../models').OrderProductAttr

const parent = null
const context = null

describe('getAllOrderProductAttr', () => {
  test('get all Order product attributes of the order', async () => {
    const args = {
      input: {
        userId: 2,
        orderId: 1
      }
    }

    const expected = [
      {
        id: 1,
        price: 567000,
        quantity: 3,
        order: {
          id: 1,
          user: { name: 'user1', email: 'user1@example.com', phoneNumber: '0999999999', address: 'HN' }
        },
        productAttr: { id: 1, value: 'S' }
      },
      {
        id: 2,
        price: 189000,
        quantity: 1,
        order: {
          id: 1,
          user: { name: 'user1', email: 'user1@example.com', phoneNumber: '0999999999', address: 'HN' }
        },
        productAttr: { id: 2, value: 'M' }
      }
    ]

    const received = await resolvers.Query.orderProductAttrs(parent, args.input, context)

    expect(received).toHaveLength(2)
    expect(received).toMatchObject(expected)
  })
})

describe('createOrderProductAttr', () => {
  test('Create a new order product attribute', async () => {
    const args = {
      input: {
        orderId: 1,
        productAttrId: 2,
        quantity: 5,
        price: 845000
      }
    }

    const expected = {
      orderId: 1,
      productAttrId: 2,
      quantity: 5,
      price: 845000
    }

    const orderProductAttr = await resolvers.Mutation.createOrderProductAttr(parent, args, context)

    expect(orderProductAttr).toMatchObject(expected)
  })
})

describe('updateOrderProductAttr', () => {
  test('update order product attribute of the order', async () => {
    const args = {
      orderProductAttrId: 3,
      input: {
        quantity: 4,
        price: 3333
      }
    }

    const expected = {
      orderId: 1,
      productAttrId: 2,
      quantity: 4,
      price: 3333
    }

    await resolvers.Mutation.updateOrderProductAttr(parent, args, context)
    const received = await OrderProductAttr.findByPk(args.orderProductAttrId)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteOrderProductAttr', () => {
  test('delete order product attribute', async () => {
    const args = {
      orderProductAttrId: 3
    }

    const received = await resolvers.Mutation.deleteOrderProductAttr(parent, args, context)

    expect(received).toBeTruthy()
  })
})
