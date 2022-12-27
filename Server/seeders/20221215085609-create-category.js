'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Áo thun',
        slug: 'ao-thun',
        created_at: new Date('2022-12-21T00:00:00.000Z'),
        updated_at: new Date('2022-12-21T00:00:00.000Z')
      },
      {
        name: 'Áo somi',
        slug: 'ao-somi',
        created_at: new Date('2022-12-21T01:00:00.000Z'),
        updated_at: new Date('2022-12-21T01:00:00.000Z')
      },
      {
        name: 'Quần jean',
        slug: 'quan-jean',
        created_at: new Date('2022-12-21T02:00:00.000Z'),
        updated_at: new Date('2022-12-21T02:00:00.000Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {})
  }
}
