// @ts-check
'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'Orders'

const seeders = [
  {
    id: 1,
    user_id: 2,
    shipping_method_id: 1,
    order_status_id: 1,
    created_at: new Date('2022-12-27T03:00:00.000Z'),
    updated_at: new Date('2022-12-27T03:00:00.000Z')
  },
  {
    id: 2,
    user_id: 2,
    shipping_method_id: 1,
    order_status_id: 2,
    created_at: new Date('2022-12-27T02:00:00.000Z'),
    updated_at: new Date('2022-12-27T02:00:00.000Z')
  },
  {
    id: 3,
    user_id: 2,
    shipping_method_id: 1,
    order_status_id: 3,
    created_at: new Date('2022-12-27T01:00:00.000Z'),
    updated_at: new Date('2022-12-27T01:00:00.000Z')
  },
  {
    id: 4,
    user_id: 2,
    shipping_method_id: 1,
    order_status_id: 4,
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
