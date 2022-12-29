const queryData = require('../../data/queryData')
const ShippingMethod = require('../../models').ShippingMethod

describe('getAllShippingMethod', () => {
  test('get all shipping method', async () => {
    const result = await queryData.getShippingMethod()
    expect(result).toHaveLength(1)
  })
})

describe('createShippingMethod', () => {
  test('Create a new shipping method', async () => {
    const shippingMethodTest = {
      name: 'test-create',
      price: 15000
    }

    await queryData.createShippingMethod(shippingMethodTest)
    const shippingMethod = await ShippingMethod.findByPk(2)
    expect(shippingMethod).toMatchObject(shippingMethodTest)
  })
})

describe('deleteShippingMethod', () => {
  test('delete a shipping method', async () => {
    const result = await ShippingMethod.destroy({
      where: { id: 2 }
    })
    expect(result).toBeTruthy()
  })
})
