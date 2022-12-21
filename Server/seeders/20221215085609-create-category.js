'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: "men's clothing",
        slug: 'men-s-clothing',
        created_at: new Date('2022-12-21T00:00:00.000Z'),
        updated_at: new Date('2022-12-21T00:00:00.000Z')
      },
      {
        name: 'jewelery',
        slug: 'jewelery',
        created_at: new Date('2022-12-21T01:00:00.000Z'),
        updated_at: new Date('2022-12-21T01:00:00.000Z')
      },
      {
        name: 'electronics',
        slug: 'electronics',
        created_at: new Date('2022-12-21T02:00:00.000Z'),
        updated_at: new Date('2022-12-21T02:00:00.000Z')
      },
      {
        name: "women's clothing",
        slug: 'women-s-clothing',
        created_at: new Date('2022-12-21T03:00:00.000Z'),
        updated_at: new Date('2022-12-21T03:00:00.000Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {})
  }
}
