'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: "men's clothing",
        slug: "men-s-clothing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "jewelery",
        slug: "jewelery",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "electronics",
        slug: "electronics",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "women's clothing",
        slug: "women-s-clothing",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
