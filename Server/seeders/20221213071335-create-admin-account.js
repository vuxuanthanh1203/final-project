'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'Users'

const seeders = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: 'admin1234',
    phone_number: '0987654321',
    address: 'HN',
    is_admin: true,
    user_name: 'admin',
    created_at: new Date('2022-12-21T00:00:00.000Z'),
    updated_at: new Date('2022-12-21T00:00:00.000Z')
  },
  {
    name: 'user1',
    email: 'user1@example.com',
    password: 'admin1234',
    phone_number: '0999999999',
    address: 'HN',
    is_admin: false,
    user_name: 'user1',
    created_at: new Date('2022-12-21T01:00:00.000Z'),
    updated_at: new Date('2022-12-21T01:00:00.000Z')
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: 'admin1234',
    phone_number: '0988888888',
    address: 'HN',
    is_admin: false,
    user_name: 'user2',
    created_at: new Date('2022-12-21T02:00:00.000Z'),
    updated_at: new Date('2022-12-21T02:00:00.000Z')
  },
  {
    name: 'user3',
    email: 'user3@example.com',
    password: 'admin1234',
    phone_number: '0987777777',
    address: 'HN',
    is_admin: false,
    user_name: 'user3',
    created_at: new Date('2022-12-21T03:00:00.000Z'),
    updated_at: new Date('2022-12-21T03:00:00.000Z')
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(TABLE_NAME, seeders)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(TABLE_NAME, {
      id: seeders.map(item => item.id)
    })
  }
}
