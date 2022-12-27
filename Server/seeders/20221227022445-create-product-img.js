'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductImgs', [
      {
        url: '../public/assets/images/products/product-01 (1).jpg',
        product_id: 1,
        created_at: new Date('2022-12-27T00:00:00.000Z'),
        updated_at: new Date('2022-12-27T00:00:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-01 (2).jpg',
        product_id: 1,
        created_at: new Date('2022-12-27T00:01:00.000Z'),
        updated_at: new Date('2022-12-27T00:01:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-02 (1).jpg',
        product_id: 2,
        created_at: new Date('2022-12-27T00:02:00.000Z'),
        updated_at: new Date('2022-12-27T00:02:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-02 (2).jpg',
        product_id: 2,
        created_at: new Date('2022-12-27T00:03:00.000Z'),
        updated_at: new Date('2022-12-27T00:03:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-07 (1).jpg',
        product_id: 3,
        created_at: new Date('2022-12-27T00:04:00.000Z'),
        updated_at: new Date('2022-12-27T00:04:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-07 (2).jpg',
        product_id: 3,
        created_at: new Date('2022-12-27T00:05:00.000Z'),
        updated_at: new Date('2022-12-27T00:05:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-08 (1).jpg',
        product_id: 4,
        created_at: new Date('2022-12-27T00:06:00.000Z'),
        updated_at: new Date('2022-12-27T00:06:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-08 (2).jpg',
        product_id: 4,
        created_at: new Date('2022-12-27T00:07:00.000Z'),
        updated_at: new Date('2022-12-27T00:07:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-10 (1).jpg',
        product_id: 5,
        created_at: new Date('2022-12-27T00:08:00.000Z'),
        updated_at: new Date('2022-12-27T00:08:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-10 (2).jpg',
        product_id: 5,
        created_at: new Date('2022-12-27T00:09:00.000Z'),
        updated_at: new Date('2022-12-27T00:09:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-11 (1).jpg',
        product_id: 6,
        created_at: new Date('2022-12-27T00:10:00.000Z'),
        updated_at: new Date('2022-12-27T00:10:00.000Z')
      },
      {
        url: '../public/assets/images/products/product-11 (2).jpg',
        product_id: 6,
        created_at: new Date('2022-12-27T00:11:00.000Z'),
        updated_at: new Date('2022-12-27T00:11:00.000Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductImgs', null, {})
  }
}