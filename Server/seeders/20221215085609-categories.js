'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'Categories'

const seeders = [
  {
    id: 1,
    name: 'Áo thun',
    slug: 'ao-thun',
    created_at: new Date('2022-12-21T00:00:00.000Z'),
    updated_at: new Date('2022-12-21T00:00:00.000Z')
  },
  {
    id: 2,
    name: 'Áo somi',
    slug: 'ao-somi',
    created_at: new Date('2022-12-21T01:00:00.000Z'),
    updated_at: new Date('2022-12-21T01:00:00.000Z')
  },
  {
    id: 3,
    name: 'Quần jean',
    slug: 'quan-jean',
    created_at: new Date('2022-12-21T02:00:00.000Z'),
    updated_at: new Date('2022-12-21T02:00:00.000Z')
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
