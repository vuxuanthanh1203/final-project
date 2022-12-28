const queryData = require('../../data/queryData')
const Order = require('../../models').Order

describe('getAllOrders', () => {
  test('get all Orders', async () => {
    const result = await queryData.getAllOrders()
    expect(result).toHaveLength(4)
  })
})

describe('getOrderById', () => {
  test('get order by id return object', async () => {
    const orderTest = {
      user_id: 2,
      shipping_method_id: 1,
      order_status_id: 1
    }
    const result = await queryData.getOrderById(1)
    expect(result).toMatchObject(orderTest)
  })
})

describe('getOrderById', () => {
  test('get order by id return null', async () => {
    const result = await queryData.getOrderById(20)
    expect(result).toBeNull()
  })
})

describe('createOrder', () => {
  test('Create a new order', async () => {
    const orderTest = {
      userId: 3,
      shippingMethodId: 1
    }

    await queryData.createOrder(orderTest)
    const order = await Order.findByPk(5)
    expect(order).toMatchObject(orderTest)
  })
})

describe('updateOrder', () => {
  test('update order', async () => {
    const orderTest = {
      userId: 3,
      shippingMethodId: 1,
      orderStatusId: 3
    }
    await Order.update({ orderStatusId: 3 }, {
      where: { id: 5 }
    })
    const order = await Order.findByPk(5)
    expect(order).toMatchObject(orderTest)
  })
})

describe('deleteOrder', () => {
  test('delete order', async () => {
    const result = await Order.destroy({
      where: { id: 5 }
    })
    expect(result).toBeTruthy()
  })
})
