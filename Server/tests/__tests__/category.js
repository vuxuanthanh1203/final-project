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

    const received = await resolvers.Query.categories()

    expect(received).toHaveLength(3)
    expect(received).toMatchObject(expected)
  })
})

describe('getCategoryById', () => {
  test('get category by id return object', async () => {
    const args = {
      categoryId: 1
    }

    const expected = {
      name: 'Áo thun',
      slug: 'ao-thun'
    }

    const received = await resolvers.Query.category(parent, args, context)

    expect(received).toMatchObject(expected)
  })
})

describe('getCategoryById', () => {
  test('get category by id return null', async () => {
    const args = {
      categoryId: 20
    }

    const received = await resolvers.Query.category(parent, args, context)

    expect(received).toBeNull()
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

    const received = await resolvers.Mutation.createCategory(parent, args, context)

    expect(received).toMatchObject(expected)
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
    const received = await Category.findByPk(args.categoryId)

    expect(received).toMatchObject(expected)
  })
})

describe('deleteCategory', () => {
  test('delete Category', async () => {
    const args = {
      categoryId: 4
    }
    const received = await resolvers.Mutation.deleteCategory(parent, args, context)

    expect(received).toBeTruthy()
  })
})
