'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Jallraven - Foldsack No1 Backpack',
        slug: 'jallraven-foldsackNo-1-backpack',
        shortDescription: 'Your perfect pack for everyday use and walks in the forest',
        productImg: 'https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg',
        categoryId: 1,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'Mens Casual Premium Slim Fit T-Shirts',
        slug: 'mens-casual-premium-slim-fit-t-shirts',
        shortDescription: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',
        productImg: 'https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY_.jpg',
        categoryId: 1,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'Solid Gold Petite Micropave',
        slug: 'solid-gold-petite-micropave',
        shortDescription: 'Satisfaction Guaranteed. Return or exchange any order within 30 days',
        productImg: 'https://fakestoreapi.com/img/61sbMiUnoGL.AC_UL640_QL65_ML3_.jpg',
        categoryId: 2,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'White Gold Plated Princess',
        slug: 'white-gold-plated-princess',
        shortDescription: `Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.`,
        productImg: 'https://fakestoreapi.com/img/71YAIFU48IL.AC_UL640_QL65_ML3_.jpg',
        categoryId: 2,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'WD 2TB Elements Portable External Hard Drive',
        slug: 'wd-2tb-elements-portable-external-hard-drive',
        shortDescription: `SB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity`,
        productImg: 'https://fakestoreapi.com/img/61IBBVJvSDL.AC_SY879_.jpg',
        categoryId: 3,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'SanDisk SSD PLUS 1TB Internal SSD',
        slug: 'sandisk-ssd-plus-1tb-internal-ssd',
        shortDescription: `Easy upgrade for faster boot up, shutdown, application load and response`,
        productImg: 'https://fakestoreapi.com/img/61U7T1koQqL.AC_SX679_.jpg',
        categoryId: 3,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        slug: 'rain-jacket-women-windbreaker-striped-climbing-raincoats',
        shortDescription: `Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.`,
        productImg: 'https://fakestoreapi.com/img/71HblAHs5xL.AC_UY879_-2.jpg',
        categoryId: 4,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        name: `Opna Women's Short Sleeve Moisture`,
        slug: `opna-Women-s-short-sleeve-moisture`,
        shortDescription: `100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight`,
        productImg: 'https://fakestoreapi.com/img/51eg55uWmdL.AC_UX679_.jpg',
        categoryId: 4,
        paranoid: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
