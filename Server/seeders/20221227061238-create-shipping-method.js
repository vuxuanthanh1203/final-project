'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ShippingMethods', [{
      name: 'COD',
      price: '15000',
      created_at: new Date('2022-12-27T00:00:00.000Z'),
      updated_at: new Date('2022-12-27T00:00:00.000Z')
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ShippingMethods', null, {})
  }
}
