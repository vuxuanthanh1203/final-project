'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: "men's clothing",
        slug: 'men-s-clothing'
      },
      {
        name: 'jewelery',
        slug: 'jewelery'
      },
      {
        name: 'electronics',
        slug: 'electronics'
      },
      {
        name: "women's clothing",
        slug: 'women-s-clothing'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {})
  }
}
