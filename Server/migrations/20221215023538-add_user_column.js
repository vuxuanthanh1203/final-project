'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'user_name', { type: Sequelize.STRING(191) });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'user_name', { type: Sequelize.STRING(191) });

  }
};
