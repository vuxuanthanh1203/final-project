'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: "men's clothing",
        slug: "men-s-clothing",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "jewelery",
        slug: "jewelery",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "electronics",
        slug: "electronics",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "women's clothing",
        slug: "women-s-clothing",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
