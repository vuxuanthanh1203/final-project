'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'OrderStatuses'

const seeders = [
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
