const resolvers = require('../../resolvers/index')
const User = require('../../models').User

const parent = null
const context = null

describe('getAllUsers', () => {
  test('get all Users', async () => {
    const result = await resolvers.Query.users()
    expect(result).toHaveLength(4)
  })
})

describe('getAllUsers', () => {
  test('get all Users return null', async () => {
    const result = await resolvers.Query.users()
    expect(result).not.toBeNull()
  })
})

describe('getUserById', () => {
  test('get user by id return object', async () => {
    const expected = {
      name: 'admin',
      userName: 'admin',
      email: 'admin@example.com',
      password: '$2b$10$IJZ./3UpBWPmScD8l7kGLOdBm0F3i6O/bXHeC/imS2Yo3gVsWPRgu',
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: true
    }
    const result = await resolvers.Query.user(parent, { userId: 1 }, context)
    expect(result).toMatchObject(expected)
  })
})

describe('getUserById', () => {
  test('get user by id return null', async () => {
    const result = await resolvers.Query.user(parent, { userId: 20 }, context)
    expect(result).toBeNull()
  })
})

describe('createUser', () => {
  test('Create a new user', async () => {
    const args = {
      input: {
        name: 'test user11',
        userName: 'test',
        email: 'testuser@example.com',
        password: '$2b$10$pibmYp.x28U1cCJtyxrRb.Hoz8gtbMCINDSwY3/fqGDcIarIo9f/S',
        phoneNumber: '0987654321',
        address: 'HN',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const expected = {
      name: 'test user11',
      userName: 'test',
      email: 'testuser@example.com',
      password: '$2b$10$pibmYp.x28U1cCJtyxrRb.Hoz8gtbMCINDSwY3/fqGDcIarIo9f/S',
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: false
    }

    await User.create(args.input)
    const user = await User.findByPk(5)
    expect(user).toMatchObject(expected)
  })
})

describe('updateUser', () => {
  test('update User', async () => {
    const args = {
      userId: 5,
      input: {
        name: 'test update77',
        userName: 'test',
        email: 'testuser@example.com',
        password: '$2b$10$pibmYp.x28U1cCJtyxrRb.Hoz8gtbMCINDSwY3/fqGDcIarIo9f/S',
        phoneNumber: '0987654321',
        address: 'HN',
        isAdmin: false
      }
    }

    const expected = {
      name: 'test update77',
      userName: 'test',
      email: 'testuser@example.com',
      password: '$2b$10$pibmYp.x28U1cCJtyxrRb.Hoz8gtbMCINDSwY3/fqGDcIarIo9f/S',
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: false
    }
    await User.update(args.input, {
      where: { id: args.userId }
    })
    const user = await User.findByPk(5)
    expect(user).toMatchObject(expected)
  })
})

describe('deleteUser', () => {
  test('delete User', async () => {
    const result = await User.destroy({
      where: { id: 5 }
    })
    expect(result).toBeTruthy()
  })
})
