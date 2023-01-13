const resolvers = require('../../resolvers/index')
const Category = require('../../models').Category

const parent = null
const context = null

describe('getAllCategories', () => {
  test('get all Categories', async () => {
    const result = await resolvers.Query.categories()
    expect(result).toHaveLength(3)
  })
})

describe('getAllCategories', () => {
  test('get all Categories return null', async () => {
    const result = await resolvers.Query.categories()
    expect(result).not.toBeNull()
  })
})

describe('getCategoryById', () => {
  test('get category by id return object', async () => {
    const categoryTest = {
      name: 'Áo thun',
      slug: 'ao-thun'
    }
    const result = await resolvers.Query.category(parent, { categoryId: 1 }, context)
    expect(result).toMatchObject(categoryTest)
  })
})

describe('getCategoryById', () => {
  test('get category by id return null', async () => {
    const result = await resolvers.Query.category(parent, { categoryId: 20 }, context)
    expect(result).toBeNull()
  })
})

describe('createCategory', () => {
  test('Create a new category', async () => {
    const args = {
      input: {
        name: 'test category21',
        slug: 'test-category21',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      name: 'test category21',
      slug: 'test-category21'
    }

    await Category.create(args.input)
    const category = await Category.findByPk(4)
    expect(category).toMatchObject(expected)
  })
})

describe('updateCategory', () => {
  test('update Category', async () => {
    const args = {
      categoryId: 4,
      input: {
        name: 'test update category',
        slug: 'test-category'
      }
    }

    const expected = {
      name: 'test update category',
      slug: 'test-category'
    }
    await Category.update(args.input, {
      where: { id: args.categoryId }
    })
    const category = await Category.findByPk(4)
    expect(category).toMatchObject(expected)
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
