// @ts-check
'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'ProductAttrs'

const seeders = [
  {
    id: 1,
    value: 'S',
    quantity_in_stock: 100,
    product_id: 1,
    created_at: new Date('2022-12-21T00:00:00.000Z'),
    updated_at: new Date('2022-12-21T00:00:00.000Z')
  },
  {
    id: 2,
    value: 'M',
    quantity_in_stock: 100,
    product_id: 1,
    created_at: new Date('2022-12-21T00:01:00.000Z'),
    updated_at: new Date('2022-12-21T00:01:00.000Z')
  },
  {
    id: 3,
    value: 'L',
    quantity_in_stock: 100,
    product_id: 1,
    created_at: new Date('2022-12-21T00:02:00.000Z'),
    updated_at: new Date('2022-12-21T00:02:00.000Z')
  },
  {
    id: 4,
    value: 'M',
    quantity_in_stock: 100,
    product_id: 2,
    created_at: new Date('2022-12-21T00:03:00.000Z'),
    updated_at: new Date('2022-12-21T00:03:00.000Z')
  },
  {
    id: 5,
    value: 'L',
    quantity_in_stock: 100,
    product_id: 2,
    created_at: new Date('2022-12-21T00:04:00.000Z'),
    updated_at: new Date('2022-12-21T00:04:00.000Z')
  },
  {
    id: 6,
    value: 'XL',
    quantity_in_stock: 100,
    product_id: 2,
    created_at: new Date('2022-12-21T00:05:00.000Z'),
    updated_at: new Date('2022-12-21T00:05:00.000Z')
  },
  {
    id: 7,
    value: 'M',
    quantity_in_stock: 100,
    product_id: 3,
    created_at: new Date('2022-12-21T00:06:00.000Z'),
    updated_at: new Date('2022-12-21T00:06:00.000Z')
  },
  {
    id: 8,
    value: 'L',
    quantity_in_stock: 100,
    product_id: 3,
    created_at: new Date('2022-12-21T00:07:00.000Z'),
    updated_at: new Date('2022-12-21T00:07:00.000Z')
  },
  {
    id: 9,
    value: 'XL',
    quantity_in_stock: 100,
    product_id: 3,
    created_at: new Date('2022-12-21T00:08:00.000Z'),
    updated_at: new Date('2022-12-21T00:08:00.000Z')
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
