const resolvers = require('../../resolvers/index')
const Category = require('../../models').Category

const parent = null
const context = null

describe('getAllCategories', () => {
  test('get all Categories', async () => {
    const expected = [
      { id: 1, name: 'Áo thun', slug: 'ao-thun' },
      { id: 2, name: 'Áo somi', slug: 'ao-somi' },
      { id: 3, name: 'Quần jean', slug: 'quan-jean' }
    ]
    const result = await resolvers.Query.categories()
    expect(result).toHaveLength(3)
    expect(result).toMatchObject(expected)
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
        slug: 'test-category21'
      }
    }

    const expected = {
      name: 'test category21',
      slug: 'test-category21'
    }

    const category = await resolvers.Mutation.createCategory(parent, args, context)
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
    await resolvers.Mutation.updateCategory(parent, args, context)
    const category = await Category.findByPk(4)
    expect(category).toMatchObject(expected)
  })
})

describe('deleteCategory', () => {
  test('delete Category', async () => {
    const result = await resolvers.Mutation.deleteCategory(parent, { categoryId: 4 }, context)
    expect(result).toBeTruthy()
  })
})
