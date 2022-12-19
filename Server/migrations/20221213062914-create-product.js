'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      shortDescription: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      paranoid: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      productImg: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};