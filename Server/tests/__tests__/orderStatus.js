const queryData = require('../../data/queryData')
const OrderStatus = require('../../models').OrderStatus

describe('getOrderStatus', () => {
  test('get all order status', async () => {
    const result = await queryData.getOrderStatus()
    expect(result).toHaveLength(4)
  })
})

describe('createOrderStatus', () => {
  test('Create a new order status', async () => {
    const orderStatusTest = {
      status: 'test'
    }

    await queryData.createOrderStatus(orderStatusTest)
    const orderStatus = await OrderStatus.findByPk(5)
    expect(orderStatus).toMatchObject(orderStatusTest)
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
