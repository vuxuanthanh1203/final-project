'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'user_name', {
      type: Sequelize.STRING(191),
      field: 'user_name',
      allowNull: false,
      after: 'name'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'user_name', {
      type: Sequelize.STRING(191),
      field: 'user_name',
      allowNull: false
    })
  }
}
