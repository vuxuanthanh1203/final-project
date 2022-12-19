'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'userName', { type: Sequelize.STRING(191) });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'userName', { type: Sequelize.STRING(191) });

  }
};
