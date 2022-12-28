'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderProductAttrs', [
      {
        order_id: 1,
        product_attr_id: 1,
        quantity: 3,
        price: '567000',
        created_at: new Date('2022-12-27T03:00:00.000Z'),
        updated_at: new Date('2022-12-27T03:00:00.000Z')
      },
      {
        order_id: 1,
        product_attr_id: 2,
        quantity: 1,
        price: '189000',
        created_at: new Date('2022-12-27T03:00:00.000Z'),
        updated_at: new Date('2022-12-27T03:00:00.000Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderProductAttrs', null, {})
  }
}
