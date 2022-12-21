'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      short_description: {
        allowNull: false,
        field: 'short_description',
        type: Sequelize.STRING(191),
      },
      product_img: {
        allowNull: false,
        field: 'product_img',
        type: Sequelize.STRING(191)
      },
      category_id: {
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
        field: 'deleted_at',
        defaultValue: null
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};