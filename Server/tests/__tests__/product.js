const resolvers = require('../../resolvers/index')
const Product = require('../../models').Product

const parent = null
const context = null

describe('getAllProducts', () => {
  test('get all products', async () => {
    const expected = [
      {
        name: 'Áo thun Dinosaur 01',
        slug: 'ao-thun-dinosaur-01',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/415/697/products/1b-ff9ccc92-6e5d-42e5-b558-41348b582c20.jpg',
        price: 189000,
        description: 'Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!',
        category: { id: 1, name: 'Áo thun', slug: 'ao-thun' }
      },
      {
        name: 'Áo thun Dinosaur 02',
        slug: 'ao-thun-dinosaur-02',
        image: 'https://bizweb.dktcdn.net/thumb/large/100/415/697/products/den2-1663927933961.jpg?v=1663927942000',
        price: 289000,
        description: 'Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng',
        category: { id: 1, name: 'Áo thun', slug: 'ao-thun' }
      },
      {
        name: 'Áo somi caro 07',
        slug: 'ao-somi-caro-07',
        image: 'https://g2000vn.com/wp-content/uploads/2018/06/1812207269.png',
        price: 389000,
        description: 'Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu',
        category: { id: 2, name: 'Áo somi', slug: 'ao-somi' }
      },
      {
        name: 'Áo somi dài tay 08',
        slug: 'ao-somi-dai-tay-08',
        image: 'https://emilio.vn/upload/products/ao-somi-nam-s25752-mau-sac-nau-size-ao-2xl-16667066508594.jpg',
        price: 199000,
        description: 'Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào',
        category: { id: 2, name: 'Áo somi', slug: 'ao-somi' }
      },
      {
        name: 'Quần jean phong cách 10',
        slug: 'quan-jean-phong-cach-10',
        image: 'https://bucket.nhanh.vn/d0f3ca-7136/ps/20210116_nMppzU7TyACUXLFEk3cFRK44.jpg',
        price: 299000,
        description: 'Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào',
        category: { id: 3, name: 'Quần jean', slug: 'quan-jean' }
      },
      {
        name: 'Quần jean 11',
        slug: 'quan-jean-11',
        image: 'https://bucket.nhanh.vn/2865a9-85186/ps/20220615_gWuxLwNNJAmTQgpiDdlwMQCz.jpg',
        price: 399000,
        description: 'Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào',
        category: { id: 3, name: 'Quần jean', slug: 'quan-jean' }
      }
    ]
    const received = await resolvers.Query.products()
    console.log(received)
    expect(received).toHaveLength(6)
    expect(received).toMatchObject(expected)
  })
})

describe('getProductById', () => {
  test('get product by id return object', async () => {
    const args = {
      productId: 1
    }

    const expected = {
      name: 'Áo thun Dinosaur 01',
      slug: 'ao-thun-dinosaur-01',
      price: 189000,
      description: 'Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!',
      category: { id: 1, name: 'Áo thun', slug: 'ao-thun' }
    }
    const received = await resolvers.Query.product(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('getProductById', () => {
  test('get product by id return null', async () => {
    const args = {
      productId: 20
    }

    const received = await resolvers.Query.product(parent, args, context)

    expect(received).toBeNull()
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
        categoryId: 1
      }
    }

    const expected = {
      name: 'Product-test',
      slug: 'product-test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price: 189000,
      categoryId: 1
    }

    const received = await resolvers.Mutation.createProduct(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('updateProduct', () => {
  test('update Product', async () => {
    const args = {
      productId: 6,
      input: {
        name: 'test update product',
        slug: 'test-update-product'
      }
    }

    const expected = {
      name: 'test update product',
      slug: 'test-update-product',
      description: 'Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào',
      price: 399000,
      category_id: 3
    }

    await resolvers.Mutation.updateProduct(parent, args, context)
    const received = await Product.findByPk(args.productId)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteProduct', () => {
  test('delete Product', async () => {
    const args = {
      productId: 7
    }

    const received = await resolvers.Mutation.deleteProduct(parent, args, context)

    expect(received).toBeTruthy()
  })
})
