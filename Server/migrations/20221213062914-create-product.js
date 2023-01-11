// @ts-check
'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
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
      price: {
        allowNull: false,
        field: 'price',
        type: Sequelize.FLOAT
      },
      description: {
        allowNull: false,
        field: 'description',
        type: Sequelize.TEXT('long')
      },
      categoryId: {
        allowNull: false,
        field: 'category_id',
        type: Sequelize.INTEGER
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
        type: Sequelize.DATE(3),
        field: 'deleted_at'
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  }
}
