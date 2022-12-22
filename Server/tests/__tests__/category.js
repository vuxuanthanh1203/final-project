const queryData = require('../../data/queryData')
const Category = require('../../models').Category

describe('getAllCategories', () => {
  test('get all Categories', async () => {
    const result = await queryData.getAllCategories()
    expect(result).toHaveLength(4)
  })
})

describe('getCategoryById', () => {
  test('get category by id return object', async () => {
    const productTest = {
      name: "men's clothing",
      slug: 'men-s-clothing'
    }
    const result = await queryData.getCategoryById(1)
    expect(result).toMatchObject(productTest)
  })
})

describe('getCategoryById', () => {
  test('get category by id return null', async () => {
    const result = await queryData.getCategoryById(20)
    expect(result).toBeNull()
  })
})

describe('createCategory', () => {
  test('Create a new category', async () => {
    const categoryTest = {
      name: 'test category',
      slug: 'test-category'
    }

    await queryData.createCategory(categoryTest)
    const user = await Category.findByPk(6)
    expect(user).toMatchObject(categoryTest)
  })
})

describe('updateCategory', () => {
  test('update Category', async () => {
    const result = await Category.update({ name: 'test update00' }, {
      where: { id: 5 }
    })
    const category = await Category.findByPk(5)
    expect(result).toMatchObject(category)
  })
})

describe('deleteCategory', () => {
  test('delete Category', async () => {
    const result = await Category.destroy({
      where: { id: 5 }
    })
    expect(result).toBeTruthy()
  })
})
