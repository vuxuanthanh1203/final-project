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
    const result = await Product.findByPk(1)
    expect(result).toBeTruthy()
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
