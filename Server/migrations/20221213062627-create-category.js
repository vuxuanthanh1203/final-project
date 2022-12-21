'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        field: 'name',
        type: Sequelize.STRING(191)
      },
      slug: {
        allowNull: false,
        field: 'slug',
        type: Sequelize.STRING(191)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        field: 'updated_at'
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE(3)
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Categories')
  }
}
