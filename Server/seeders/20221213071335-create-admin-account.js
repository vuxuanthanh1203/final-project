'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@example.com',
        password: 'admin1234',
        phone_number: '0987654321',
        address: 'HN',
        is_admin: true,
        user_name: 'admin'
      },
      {
        name: 'user1',
        user_name: 'user1',
        email: 'user1@example.com',
        password: 'admin1234',
        phone_number: '0999999999',
        address: 'HN',
        is_admin: false
      },
      {
        name: 'user2',
        email: 'user2@example.com',
        password: 'admin1234',
        phone_number: '0988888888',
        address: 'HN',
        is_admin: false,
        user_name: 'user2'
      },
      {
        name: 'user3',
        email: 'user3@example.com',
        password: 'admin1234',
        phone_number: '0987777777',
        address: 'HN',
        is_admin: false,
        user_name: 'user3'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
