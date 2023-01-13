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
    const result = await resolvers.Query.orderProductAttr(parent, args, context)
    expect(result).toHaveLength(2)
  })
})

describe('createOrderProductAttr', () => {
  test('Create a new order product attribute', async () => {
    const args = {
      input: {
        orderId: 1,
        productAttrId: 2,
        quantity: 5,
        price: 845000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      orderId: 1,
      productAttrId: 2,
      quantity: 5,
      price: 845000
    }

    await OrderProductAttr.create(args.input)
    const orderProductAttr = await OrderProductAttr.findByPk(3)
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
    await OrderProductAttr.update(args.input, {
      where: { id: args.orderProductAttrId }
    })
    const orderProductAttr = await OrderProductAttr.findByPk(3)
    expect(orderProductAttr).toMatchObject(expected)
  })
})

describe('deleteOrderProductAttr', () => {
  test('delete order product attribute', async () => {
    const result = await OrderProductAttr.destroy({
      where: { id: 3 }
    })
    expect(result).toBeTruthy()
  })
})
