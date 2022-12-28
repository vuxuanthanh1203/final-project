'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductAttrs', [
      {
        value: 'S',
        quantity_in_stock: 100,
        product_id: 1,
        created_at: new Date('2022-12-21T00:00:00.000Z'),
        updated_at: new Date('2022-12-21T00:00:00.000Z')
      },
      {
        value: 'M',
        quantity_in_stock: 100,
        product_id: 1,
        created_at: new Date('2022-12-21T00:01:00.000Z'),
        updated_at: new Date('2022-12-21T00:01:00.000Z')
      },
      {
        value: 'L',
        quantity_in_stock: 100,
        product_id: 1,
        created_at: new Date('2022-12-21T00:02:00.000Z'),
        updated_at: new Date('2022-12-21T00:02:00.000Z')
      },
      {
        value: 'M',
        quantity_in_stock: 100,
        product_id: 2,
        created_at: new Date('2022-12-21T00:03:00.000Z'),
        updated_at: new Date('2022-12-21T00:03:00.000Z')
      },
      {
        value: 'L',
        quantity_in_stock: 100,
        product_id: 2,
        created_at: new Date('2022-12-21T00:04:00.000Z'),
        updated_at: new Date('2022-12-21T00:04:00.000Z')
      },
      {
        value: 'XL',
        quantity_in_stock: 100,
        product_id: 2,
        created_at: new Date('2022-12-21T00:05:00.000Z'),
        updated_at: new Date('2022-12-21T00:05:00.000Z')
      },
      {
        value: 'M',
        quantity_in_stock: 100,
        product_id: 3,
        created_at: new Date('2022-12-21T00:06:00.000Z'),
        updated_at: new Date('2022-12-21T00:06:00.000Z')
      },
      {
        value: 'L',
        quantity_in_stock: 100,
        product_id: 3,
        created_at: new Date('2022-12-21T00:07:00.000Z'),
        updated_at: new Date('2022-12-21T00:07:00.000Z')
      },
      {
        value: 'XL',
        quantity_in_stock: 100,
        product_id: 3,
        created_at: new Date('2022-12-21T00:08:00.000Z'),
        updated_at: new Date('2022-12-21T00:08:00.000Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductAttrs', null, {})
  }
}
