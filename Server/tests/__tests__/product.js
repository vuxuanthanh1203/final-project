const queryData = require('../../data/queryData')
const Product = require('../../models').Product

describe('getAllProducts', () => {
  test('get all products', async () => {
    const result = await queryData.getAllProducts()
    expect(result).toHaveLength(6)
  })
})

describe('getProductById', () => {
  test('get product by id return object', async () => {
    const productTest = {
      name: 'Áo thun Dinosaur 01',
      slug: 'ao-thun-dinosaur-01',
      description: 'Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!',
      price: 189000,
      category_id: 1
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
      name: 'Product-test',
      slug: 'product-test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price: 189000,
      categoryId: 1
    }

    await queryData.createProduct(productTest)
    const product = await Product.findByPk(7)
    expect(product).toMatchObject(productTest)
  })
})

describe('updateProduct', () => {
  test('update Product', async () => {
    const productTest = {
      name: 'test update product',
      slug: 'product-test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price: 189000,
      category_id: 1
    }
    await Product.update({ name: 'test update product' }, {
      where: { id: 7 }
    })
    const product = await Product.findByPk(7)
    expect(product).toMatchObject(productTest)
  })
})

describe('deleteProduct', () => {
  test('delete Product', async () => {
    const result = await Product.destroy({
      where: { id: 7 }
    })
    expect(result).toBeTruthy()
  })
})

describe('testIndex', () => {
  test('Check Product Status', async () => {
    const result = await queryData.checkProuctStatus()
    expect(result).toHaveLength(6)
  })
})
