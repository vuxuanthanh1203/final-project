'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      email: {
        allowNull: false,
        field: 'email',
        type: Sequelize.STRING(191)
      },
      password: {
        allowNull: false,
        field: 'password',
        type: Sequelize.STRING(191)
      },
      phoneNumber: {
        allowNull: false,
        field: 'phone_number',
        type: Sequelize.STRING(11)
      },
      address: {
        allowNull: false,
        field: 'address',
        type: Sequelize.STRING(191)
      },
      isAdmin: {
        allowNull: false,
        field: 'is_admin',
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        field: 'created_at',
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE(3),
        defaultValue: new Date()
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE(3),
        defaultValue: null
      }
    })
    await queryInterface.addIndex('users', ['name'], {
      name: 'users_name_index'
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
