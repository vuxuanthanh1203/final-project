const queryData = require('../../data/queryData')
const Product = require('../../models').Product

describe('getAllProducts', () => {
  test('get all products', async () => {
    const result = await queryData.getAllProducts()
    expect(result).toHaveLength(8)
  })
})

describe('getProductById', () => {
  test('get product by id', async () => {
    const productTest = {
      name: 'Jallraven - Foldsack No1 Backpack',
      slug: 'jallraven-foldsackNo-1-backpack',
      shortDescription: 'Your perfect pack for everyday use and walks in the forest',
      productImg: 'https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg',
      categoryId: 1
    }
    const result = await queryData.getProductById(10)
    if (result) {
      expect(result).toMatchObject(productTest)
    }
    expect(result).toBeNull()
  })
})

describe('createProduct', () => {
  test('Create a new product', async () => {
    const productTest = {
      name: 'product test 5',
      slug: 'product-test-5',
      shortDescription: 'ladlfa;lfda;ldfaldfla',
      productImg: 'https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg',
      categoryId: 3,
      createdAt: new Date('2022-12-21T05:00:00.000Z'),
      updatedAt: new Date('2022-12-21T05:00:00.000Z')
    }

    const result = await Product.create(productTest)
    expect(result).toBeTruthy()
  })
})

describe('updateProduct', () => {
  test('update Product', async () => {
    const result = await Product.update({ name: 'test update00' }, {
      where: { id: 9 }
    })
    expect(result).toBeTruthy()
  })
})

describe('deleteProduct', () => {
  test('delete Product', async () => {
    const result = await Product.destroy({
      where: { id: 13 }
    })
    expect(result).toBeTruthy()
  })
})

describe('testIndex', () => {
  test('Check Product Status', async () => {
    const result = await queryData.checkProuctStatus()
    expect(result).toHaveLength(8)
  })
})
