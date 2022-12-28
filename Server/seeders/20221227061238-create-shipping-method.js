'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'ShippingMethods'

const seeders = [
  {
    name: 'COD',
    price: '15000',
    created_at: new Date('2022-12-27T00:00:00.000Z'),
    updated_at: new Date('2022-12-27T00:00:00.000Z')
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
