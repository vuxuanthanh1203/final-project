// @ts-check
'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'ProductImgs'

const seeders = [
  {
    id: 1,
    url: '../public/assets/images/products/product-01 (1).jpg',
    product_id: 1,
    created_at: new Date('2022-12-27T00:00:00.000Z'),
    updated_at: new Date('2022-12-27T00:00:00.000Z')
  },
  {
    id: 2,
    url: '../public/assets/images/products/product-01 (2).jpg',
    product_id: 1,
    created_at: new Date('2022-12-27T00:01:00.000Z'),
    updated_at: new Date('2022-12-27T00:01:00.000Z')
  },
  {
    id: 3,
    url: '../public/assets/images/products/product-02 (1).jpg',
    product_id: 2,
    created_at: new Date('2022-12-27T00:02:00.000Z'),
    updated_at: new Date('2022-12-27T00:02:00.000Z')
  },
  {
    id: 4,
    url: '../public/assets/images/products/product-02 (2).jpg',
    product_id: 2,
    created_at: new Date('2022-12-27T00:03:00.000Z'),
    updated_at: new Date('2022-12-27T00:03:00.000Z')
  },
  {
    id: 5,
    url: '../public/assets/images/products/product-07 (1).jpg',
    product_id: 3,
    created_at: new Date('2022-12-27T00:04:00.000Z'),
    updated_at: new Date('2022-12-27T00:04:00.000Z')
  },
  {
    id: 6,
    url: '../public/assets/images/products/product-07 (2).jpg',
    product_id: 3,
    created_at: new Date('2022-12-27T00:05:00.000Z'),
    updated_at: new Date('2022-12-27T00:05:00.000Z')
  },
  {
    id: 7,
    url: '../public/assets/images/products/product-08 (1).jpg',
    product_id: 4,
    created_at: new Date('2022-12-27T00:06:00.000Z'),
    updated_at: new Date('2022-12-27T00:06:00.000Z')
  },
  {
    id: 8,
    url: '../public/assets/images/products/product-08 (2).jpg',
    product_id: 4,
    created_at: new Date('2022-12-27T00:07:00.000Z'),
    updated_at: new Date('2022-12-27T00:07:00.000Z')
  },
  {
    id: 9,
    url: '../public/assets/images/products/product-10 (1).jpg',
    product_id: 5,
    created_at: new Date('2022-12-27T00:08:00.000Z'),
    updated_at: new Date('2022-12-27T00:08:00.000Z')
  },
  {
    id: 10,
    url: '../public/assets/images/products/product-10 (2).jpg',
    product_id: 5,
    created_at: new Date('2022-12-27T00:09:00.000Z'),
    updated_at: new Date('2022-12-27T00:09:00.000Z')
  },
  {
    id: 11,
    url: '../public/assets/images/products/product-11 (1).jpg',
    product_id: 6,
    created_at: new Date('2022-12-27T00:10:00.000Z'),
    updated_at: new Date('2022-12-27T00:10:00.000Z')
  },
  {
    id: 12,
    url: '../public/assets/images/products/product-11 (2).jpg',
    product_id: 6,
    created_at: new Date('2022-12-27T00:11:00.000Z'),
    updated_at: new Date('2022-12-27T00:11:00.000Z')
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(TABLE_NAME, seeders)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(TABLE_NAME, {
      id: seeders.map(item => item.id)
    })
  }
}
