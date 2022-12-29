const queryData = require('../../data/queryData')
const OrderProductAttr = require('../../models').OrderProductAttr

describe('getAllOrderProductAttr', () => {
  test('get all Order product attributes of the order', async () => {
    const result = await queryData.getOrderProductAttr({
      userId: 2,
      orderId: 1
    })
    expect(result).toHaveLength(2)
  })
})

describe('createOrderProductAttr', () => {
  test('Create a new order product attribute', async () => {
    const orderProductAttrTest = {
      orderId: 1,
      productAttrId: 2,
      quantity: 5,
      price: 845000
    }

    await queryData.createOrderProductAttr(orderProductAttrTest)
    const orderProductAttr = await OrderProductAttr.findByPk(3)
    expect(orderProductAttr).toMatchObject(orderProductAttrTest)
  })
})

describe('updateOrderProductAttr', () => {
  test('update order product attribute of the order', async () => {
    const orderProductAttrTest = {
      orderId: 1,
      productAttrId: 2,
      quantity: 4,
      price: 111111
    }
    await OrderProductAttr.update({ quantity: 4, price: 111111 }, {
      where: { id: 3 }
    })
    const orderProductAttr = await OrderProductAttr.findByPk(3)
    expect(orderProductAttr).toMatchObject(orderProductAttrTest)
  })
})
