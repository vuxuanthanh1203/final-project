'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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
      email: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(11)
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      isAdmin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      paranoid: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
        // field: 'created_at'
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
    await queryInterface.addIndex('Users', ['name', 'email'], {
      name: 'inactivate_account',
      where: {
        paranoid: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};