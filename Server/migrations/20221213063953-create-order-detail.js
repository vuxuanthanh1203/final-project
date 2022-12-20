'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        allowNull: false,
        field: 'order_id',
        type: Sequelize.INTEGER
      },
      product_attr_id: {
        allowNull: false,
        field: 'product_attr_id',
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        field: 'quantity',
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        field: 'price',
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE(3)
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE(3)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderDetails');
  }
};