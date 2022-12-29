const queryData = require('../../data/queryData')
const ProductAttr = require('../../models').ProductAttr

describe('getAllProductAttributes', () => {
  test('get all attributes of the product', async () => {
    const result = await queryData.getAllProductAttributes(1)
    expect(result).toHaveLength(3)
  })
})

describe('createProductAttr', () => {
  test('Create a new attribute of the product', async () => {
    const productAttrTest = {
      value: 'test',
      quantityInStock: 100,
      productId: 3
    }

    await queryData.createProductAttr(productAttrTest)
    const productAttr = await ProductAttr.findByPk(10)
    expect(productAttr).toMatchObject(productAttrTest)
  })
})

describe('updateProductAttr', () => {
  test('update an attribute of the product', async () => {
    const productAttrTest = {
      value: 'test-update',
      quantityInStock: 30,
      productId: 3
    }
    await ProductAttr.update({
      value: 'test-update',
      quantityInStock: 30
    },
    {
      where: { id: 10 }
    })
    const productAttr = await ProductAttr.findByPk(10)
    expect(productAttr).toMatchObject(productAttrTest)
  })
})

describe('deleteProductAttr', () => {
  test('delete an attribute of the product', async () => {
    const result = await ProductAttr.destroy({
      where: { id: 10 }
    })
    expect(result).toBeTruthy()
  })
})
