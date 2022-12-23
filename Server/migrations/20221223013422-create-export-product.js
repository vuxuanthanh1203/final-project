'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ExportProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fileUrl: {
        allowNull: false,
        field: 'file_url',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE(3)
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE(3)
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ExportProducts')
  }
}
