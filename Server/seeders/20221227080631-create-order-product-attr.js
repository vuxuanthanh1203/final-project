'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'OrderProductAttrs'

const seeders = [
  {
    order_id: 1,
    product_attr_id: 1,
    quantity: 3,
    price: 567000,
    created_at: new Date('2022-12-27T03:00:00.000Z'),
    updated_at: new Date('2022-12-27T03:00:00.000Z')
  },
  {
    order_id: 1,
    product_attr_id: 2,
    quantity: 1,
    price: 189000,
    created_at: new Date('2022-12-27T03:00:00.000Z'),
    updated_at: new Date('2022-12-27T03:00:00.000Z')
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
