'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
      {
        user_id: 2,
        shipping_method_id: 1,
        order_status_id: 1,
        created_at: new Date('2022-12-27T03:00:00.000Z'),
        updated_at: new Date('2022-12-27T03:00:00.000Z')
      },
      {
        user_id: 2,
        shipping_method_id: 1,
        order_status_id: 2,
        created_at: new Date('2022-12-27T02:00:00.000Z'),
        updated_at: new Date('2022-12-27T02:00:00.000Z')
      },
      {
        user_id: 2,
        shipping_method_id: 1,
        order_status_id: 3,
        created_at: new Date('2022-12-27T01:00:00.000Z'),
        updated_at: new Date('2022-12-27T01:00:00.000Z')
      },
      {
        user_id: 2,
        shipping_method_id: 1,
        order_status_id: 4,
        created_at: new Date('2022-12-27T00:00:00.000Z'),
        updated_at: new Date('2022-12-27T00:00:00.000Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {})
  }
}
