// @ts-check
'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ProductAttrs', {
      id: {
        allowNull: false,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: false,
        field: 'value',
        type: Sequelize.STRING(191)
      },
      quantityInStock: {
        allowNull: false,
        field: 'quantity_in_stock',
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        field: 'product_id',
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
    await queryInterface.dropTable('ProductAttrs')
  }
}
