const queryData = require('../../data/queryData')
const Category = require('../../models').Category

describe('getAllCategories', () => {
  test('get all Categories', async () => {
    const result = await queryData.getAllCategories()
    expect(result).toHaveLength(3)
  })
})

describe('getCategoryById', () => {
  test('get category by id return object', async () => {
    const categoryTest = {
      name: 'Áo thun',
      slug: 'ao-thun'
    }
    const result = await queryData.getCategoryById(1)
    expect(result).toMatchObject(categoryTest)
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
    const category = await Category.findByPk(4)
    expect(category).toMatchObject(categoryTest)
  })
})

describe('updateCategory', () => {
  test('update Category', async () => {
    const categoryTest = {
      name: 'test update00',
      slug: 'test-category'
    }
    await Category.update({ name: 'test update00' }, {
      where: { id: 4 }
    })
    const category = await Category.findByPk(4)
    expect(category).toMatchObject(categoryTest)
  })
})

describe('deleteCategory', () => {
  test('delete Category', async () => {
    const result = await Category.destroy({
      where: { id: 4 }
    })
    expect(result).toBeTruthy()
  })
})
