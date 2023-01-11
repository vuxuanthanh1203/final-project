const resolvers = require('../../resolvers/index')
const Product = require('../../models').Product

const parent = null
const context = null

describe('getAllProducts', () => {
  test('get all products', async () => {
    const result = await resolvers.Query.products()
    expect(result).toHaveLength(6)
  })
})

describe('getAllProducts', () => {
  test('get all products return null', async () => {
    const result = await resolvers.Query.products()
    expect(result).not.toBeNull()
  })
})

describe('getProductById', () => {
  test('get product by id return object', async () => {
    const expected = {
      name: 'Áo thun Dinosaur 01',
      slug: 'ao-thun-dinosaur-01',
      price: 189000,
      description: 'Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!',
      category: { id: 1, name: 'Áo thun', slug: 'ao-thun' }
    }
    const result = await resolvers.Query.product(parent, { productId: 1 }, context)
    expect(result).toMatchObject(expected)
  })
})

describe('getProductById', () => {
  test('get product by id return null', async () => {
    const result = await resolvers.Query.product(parent, { productId: 20 }, context)
    expect(result).toBeNull()
  })
})

describe('createProduct', () => {
  test('Create a new product', async () => {
    const args = {
      input: {
        name: 'Product-test',
        slug: 'product-test',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        price: 189000,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      name: 'Product-test',
      slug: 'product-test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price: 189000,
      categoryId: 1
    }

    await Product.create(args.input)
    const product = await Product.findByPk(7)
    expect(product).toMatchObject(expected)
  })
})

describe('updateProduct', () => {
  test('update Product', async () => {
    const args = {
      productId: 7,
      input: {
        name: 'test update product'
      }
    }

    const expected = {
      name: 'test update product',
      slug: 'product-test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price: 189000,
      category_id: 1
    }
    await Product.update(args.input, {
      where: { id: args.productId }
    })
    const product = await Product.findByPk(7)
    expect(product).toMatchObject(expected)
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
