'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductAttrs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING(191)
      },
      price: {
        type: Sequelize.DECIMAL
      },
      quantity_in_stock: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductAttrs');
  }
};