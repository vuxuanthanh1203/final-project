const queryData = require('../../data/queryData')
const Category = require('../../models').Category

describe('getAllCategories', () => {
  test('get all Categories', async () => {
    const result = await queryData.getAllCategories()
    expect(result).toHaveLength(4)
  })
})

describe('getCategoryById', () => {
  test('get category by id', async () => {
    const categoryTest = {
      name: "men's clothing",
      slug: 'men-s-clothing'
    }
    const result = await queryData.getCategoryById(10)
    if (result) {
      expect(result).toMatchObject(categoryTest)
    }
    expect(result).toBeNull()
  })
})

describe('createCategory', () => {
  test('Create a new Category', async () => {
    const CategoryTest = {
      name: 'test category',
      slug: 'test-category',
      createdAt: new Date('2022-12-21T05:00:00.000Z'),
      updatedAt: new Date('2022-12-21T05:00:00.000Z')
    }

    const result = await Category.create(CategoryTest)
    expect(result).toBeTruthy()
  })
})

describe('updateCategory', () => {
  test('update Category', async () => {
    const result = await Category.update({ name: 'test update00' }, {
      where: { id: 5 }
    })
    expect(result).toBeTruthy()
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
