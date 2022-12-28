const queryData = require('../../data/queryData')
const ProductImg = require('../../models').ProductImg

describe('getAllProductImages', () => {
  test('get all images of the product', async () => {
    const result = await queryData.getAllProductImgs()
    expect(result).toHaveLength(2)
  })
})

describe('createProductImg', () => {
  test('Create a new attribute of th product', async () => {
    const productImgTest = {
      url: '../public/assets/images/products/product-09 (1).jpg',
      productId: 7
    }

    await queryData.createProductImg(productImgTest)
    const productImg = await ProductImg.findByPk(13)
    expect(productImg).toMatchObject(productImgTest)
  })
})

describe('deleteProductImg', () => {
  test('delete an image of the product', async () => {
    const result = await ProductImg.destroy({
      where: { id: 13 }
    })
    expect(result).toBeTruthy()
  })
})
