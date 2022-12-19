'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@example.com',
        password: 'admin1234',
        phoneNumber: "0987654321",
        address: 'HN',
        isAdmin: true,
        userName: "admin",
        paranoid: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'user1',
        email: 'user1@example.com',
        password: 'admin1234',
        phoneNumber: "0999999999",
        address: 'HN',
        isAdmin: false,
        userName: "user1",
        paranoid: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'user2',
        email: 'user2@example.com',
        password: 'admin1234',
        phoneNumber: "0988888888",
        address: 'HN',
        isAdmin: false,
        userName: "user2",
        paranoid: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'user3',
        email: 'user3@example.com',
        password: 'admin1234',
        phoneNumber: "0987777777",
        address: 'HN',
        isAdmin: false,
        userName: "user3",
        paranoid: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
