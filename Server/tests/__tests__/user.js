const queryData = require('../../data/queryData')
const User = require('../../models').User

describe('getAllUsers', () => {
  test('get all Users', async () => {
    const result = await queryData.getAllUsers()
    expect(result).toHaveLength(4)
  })
})

describe('getUserById', () => {
  test('get user by id return object', async () => {
    const userTest = {
      name: 'admin',
      userName: 'admin',
      email: 'admin@example.com',
      password: 'admin1234',
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: true
    }
    const result = await queryData.getUserById(1)
    expect(result).toMatchObject(userTest)
  })
})

describe('getUserById', () => {
  test('get user by id return null', async () => {
    const result = await queryData.getUserById(20)
    expect(result).toBeNull()
  })
})

describe('createUser', () => {
  test('Create a new user', async () => {
    const userTest = {
      name: 'test user11',
      email: 'testuser@example.com',
      password: '123456',
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: false,
      userName: 'test'
    }

    await queryData.createUser(userTest)
    const user = await User.findByPk(5)
    expect(user).toMatchObject(userTest)
  })
})

describe('updateUser', () => {
  test('update User', async () => {
    const userTest = {
      name: 'test update77',
      email: 'testuser@example.com',
      password: '123456',
      phoneNumber: '0987654321',
      address: 'HN',
      isAdmin: false,
      userName: 'test'
    }
    await User.update({ name: 'test update77' }, {
      where: { id: 5 }
    })
    const user = await User.findByPk(5)
    expect(user).toMatchObject(userTest)
  })
})

describe('deleteUser', () => {
  test('delete User', async () => {
    const result = await User.destroy({
      where: { id: 4 }
    })
    expect(result).toBeTruthy()
  })
})
