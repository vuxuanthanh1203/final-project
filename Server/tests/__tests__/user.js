const resolvers = require('../../resolvers/index')
const User = require('../../models').User

const parent = null
const context = null

describe('getAllUsers', () => {
  test('get all Users', async () => {
    const expected = [
      {
        id: 1,
        name: 'admin',
        userName: 'admin',
        email: 'admin@example.com',
        password: '$2b$10$IJZ./3UpBWPmScD8l7kGLOdBm0F3i6O/bXHeC/imS2Yo3gVsWPRgu',
        phoneNumber: '0987654321',
        address: 'HN',
        isAdmin: true
      },
      {
        id: 2,
        name: 'user1',
        userName: 'user1',
        email: 'user1@example.com',
        password: '$2b$10$IJZ./3UpBWPmScD8l7kGLOdBm0F3i6O/bXHeC/imS2Yo3gVsWPRgu',
        phoneNumber: '0999999999',
        address: 'HN',
        isAdmin: false
      },
      {
        id: 3,
        name: 'user2',
        userName: 'user2',
        email: 'user2@example.com',
        password: '$2b$10$pibmYp.x28U1cCJtyxrRb.Hoz8gtbMCINDSwY3/fqGDcIarIo9f/S',
        phoneNumber: '0988888888',
        address: 'HN',
        isAdmin: false
      },
      {
        id: 4,
        name: 'user3',
        userName: 'user3',
        email: 'user3@example.com',
        password: '$2b$10$pibmYp.x28U1cCJtyxrRb.Hoz8gtbMCINDSwY3/fqGDcIarIo9f/S',
        phoneNumber: '0987777777',
        address: 'HN',
        isAdmin: false
      }
    ]
    const received = await resolvers.Query.users()
    expect(received).toHaveLength(4)
    expect(received).toMatchObject(expected)
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
    const received = await resolvers.Query.user(parent, { userId: 1 }, context)
    expect(received).toMatchObject(expected)
  })
})

describe('getUserById', () => {
  test('get user by id return null', async () => {
    const received = await resolvers.Query.user(parent, { userId: 20 }, context)
    expect(received).toBeNull()
  })
})

describe('createUser', () => {
  test('Create a new user', async () => {
    const args = {
      input: {
        name: 'test user11',
        userName: 'test',
        email: 'testuser20@example.com',
        password: 'admin1234',
        phoneNumber: '0987654321',
        address: 'HN',
        isAdmin: false
      }
    }

    const expected = {
      name: 'test user11',
      userName: 'test',
      email: 'testuser20@example.com',
      password: expect.any(String),
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: false
    }

    const received = await resolvers.Mutation.createUser(parent, args, context)

    expect(received).toEqual(expect.objectContaining(expected))
  })
})

describe('updateUser', () => {
  test('update User', async () => {
    const args = {
      userId: 5,
      input: {
        name: 'test update77',
        userName: 'test',
        password: 'admin1234',
        phoneNumber: '0987654321',
        address: 'HN',
        isAdmin: false
      }
    }

    const expected = {
      name: 'test update77',
      userName: 'test',
      password: expect.any(String),
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: false
    }
    await resolvers.Mutation.updateUser(parent, args, context)
    const received = await User.findByPk(args.userId)
    expect(received).toEqual(expect.objectContaining(expected))
  })
})

describe('deleteUser', () => {
  test('delete User', async () => {
    const received = await resolvers.Mutation.deleteUser(parent, { userId: 5 }, context)
    expect(received).toBeTruthy()
  })
})
