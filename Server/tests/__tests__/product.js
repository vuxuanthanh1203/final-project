const queryData = require('../../data/queryData')
const Product = require('../../models').Product

describe('getAllProducts', () => {
  test('get all products', async () => {
    const result = await queryData.getAllProducts()
    expect(result).toHaveLength(18)
  })
})

describe('getProductById', () => {
  test('get product by id return object', async () => {
    const productTest = {
      name: 'Jallraven - Foldsack No1 Backpack',
      slug: 'jallraven-foldsackNo-1-backpack',
      shortDescription: 'Your perfect pack for everyday use and walks in the forest',
      productImg: 'https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg',
      categoryId: 1
    }
    const result = await queryData.getProductById(1)
    expect(result).toMatchObject(productTest)
  })
})

describe('getProductById', () => {
  test('get product by id return null', async () => {
    const result = await queryData.getProductById(20)
    expect(result).toBeNull()
  })
})

describe('createProduct', () => {
  test('Create a new product', async () => {
    const productTest = {
      name: 'product test 10',
      slug: 'product-test-10',
      shortDescription: 'ladlfa;lfda;ldfaldfla',
      productImg: 'https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg',
      categoryId: 3
    }

    await queryData.createProduct(productTest)
    const product = await Product.findByPk(9)
    expect(product).toMatchObject(productTest)
  })
})

describe('updateProduct', () => {
  test('update Product', async () => {
    const productTest = {
      name: 'test update00',
      slug: 'product-test-10',
      shortDescription: 'ladlfa;lfda;ldfaldfla',
      productImg: 'https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg',
      categoryId: 3
    }
    await Product.update({ name: 'test update00' }, {
      where: { id: 9 }
    })
    const product = await Product.findByPk(9)
    expect(product).toMatchObject(productTest)
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
    expect(result).toHaveLength(9)
  })
})

describe('test get product with category', () => {
  test('Select all product with category', async () => {
    const result = await queryData.getProductsWithCategory()
    expect(result).toHaveLength(9)
  })
})
