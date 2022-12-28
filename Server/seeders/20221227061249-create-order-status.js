'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderStatuses', [
      {
        status: 'pending',
        created_at: new Date('2022-12-27T00:00:00.000Z'),
        updated_at: new Date('2022-12-27T00:00:00.000Z')
      },
      {
        status: 'shipping',
        created_at: new Date('2022-12-27T01:00:00.000Z'),
        updated_at: new Date('2022-12-27T01:00:00.000Z')
      },
      {
        status: 'success',
        created_at: new Date('2022-12-27T02:00:00.000Z'),
        updated_at: new Date('2022-12-27T02:00:00.000Z')
      },
      {
        status: 'cancel',
        created_at: new Date('2022-12-27T03:00:00.000Z'),
        updated_at: new Date('2022-12-27T03:00:00.000Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderStatuses', null, {})
  }
}
