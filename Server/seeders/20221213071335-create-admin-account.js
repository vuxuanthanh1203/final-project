'use strict'

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'Users'

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  return passwordHash
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(TABLE_NAME, [
      {
        id: 1,
        name: 'admin',
        email: 'admin@example.com',
        password: await hashPassword('admin1234'),
        phone_number: '0987654321',
        address: 'HN',
        is_admin: true,
        user_name: 'admin',
        created_at: new Date('2022-12-21T00:00:00.000Z'),
        updated_at: new Date('2022-12-21T00:00:00.000Z')
      },
      {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password: await hashPassword('abcd1234'),
        phone_number: '0999999999',
        address: 'HN',
        is_admin: false,
        user_name: 'user1',
        created_at: new Date('2022-12-21T01:00:00.000Z'),
        updated_at: new Date('2022-12-21T01:00:00.000Z')
      },
      {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password: await hashPassword('abcd1234'),
        phone_number: '0988888888',
        address: 'HN',
        is_admin: false,
        user_name: 'user2',
        created_at: new Date('2022-12-21T02:00:00.000Z'),
        updated_at: new Date('2022-12-21T02:00:00.000Z')
      },
      {
        id: 4,
        name: 'user3',
        email: 'user3@example.com',
        password: await hashPassword('abcd1234'),
        phone_number: '0987777777',
        address: 'HN',
        is_admin: false,
        user_name: 'user3',
        created_at: new Date('2022-12-21T03:00:00.000Z'),
        updated_at: new Date('2022-12-21T03:00:00.000Z')
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete(TABLE_NAME, { id: { [Op.in]: [1, 2, 3, 4] } })
  }
}
