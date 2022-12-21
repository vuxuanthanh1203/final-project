// const queryData = require('../../data/queryData')
// const User = require('../../models').User

// describe('getAllUsers', () => {
//   test('get all Users', async () => {
//     const result = await queryData.getAllUsers()
//     expect(result).toHaveLength(4)
//   })
// })

// describe('getUserById', () => {
//   test('get user by id', async () => {
//     const userTest = {
//       name: 'user3',
//       email: 'user3@example.com',
//       password: 'admin1234',
//       phone_number: '0987777777',
//       address: 'HN',
//       is_admin: false,
//       user_name: 'user3'
//     }
//     const result = await queryData.getUserById(10)
//     if (result) {
//       expect(result).toMatchObject(userTest)
//     }
//     expect(result).toBeNull()
//   })
// })

// describe('createUser', () => {
//   test('Create a new User', async () => {
//     const userTest = {
//       name: 'test user11',
//       email: 'testuser@example.com',
//       password: '123456',
//       phoneNumber: '0987654321',
//       address: 'HN',
//       isAdmin: false,
//       userName: 'test',
//       createdAt: new Date('2022-12-21T05:00:00.000Z'),
//       updatedAt: new Date('2022-12-21T05:00:00.000Z')
//     }

//     const result = await User.create(userTest)
//     expect(result).toBeTruthy()
//   })
// })

// describe('updateUser', () => {
//   test('update User', async () => {
//     const result = await User.update({ name: 'test update00' }, {
//       where: { id: 4 }
//     })
//     expect(result).toBeTruthy()
//   })
// })

// describe('deleteUser', () => {
//   test('delete User', async () => {
//     const result = await User.destroy({
//       where: { id: 4 }
//     })
//     expect(result).toBeTruthy()
//   })
// })
