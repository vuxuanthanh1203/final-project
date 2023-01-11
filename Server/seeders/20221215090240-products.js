// @ts-check
'use strict'

/** @type {import('sequelize-cli').Migration} */

const TABLE_NAME = 'Products'

const seeders = [
  {
    id: 1,
    name: 'Áo thun Dinosaur 01',
    slug: 'ao-thun-dinosaur-01',
    description: 'Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!',
    price: '189000',
    category_id: 1,
    created_at: new Date('2022-12-21T01:00:00.000Z'),
    updated_at: new Date('2022-12-21T01:00:00.000Z')
  },
  {
    id: 2,
    name: 'Áo thun Dinosaur 02',
    slug: 'ao-thun-dinosaur-02',
    description: 'Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng',
    price: '189000',
    category_id: 1,
    created_at: new Date('2022-12-21T02:00:00.000Z'),
    updated_at: new Date('2022-12-21T02:00:00.000Z')
  },
  {
    id: 3,
    name: 'Áo somi caro 07',
    slug: 'ao-somi-caro-07',
    description: 'Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu',
    price: '189000',
    category_id: 2,
    created_at: new Date('2022-12-21T03:00:00.000Z'),
    updated_at: new Date('2022-12-21T03:00:00.000Z')
  },
  {
    id: 4,
    name: 'Áo somi dài tay 08',
    slug: 'ao-somi-dai-tay-08',
    description: 'Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào',
    price: '189000',
    category_id: 2,
    created_at: new Date('2022-12-21T04:00:00.000Z'),
    updated_at: new Date('2022-12-21T04:00:00.000Z')
  },
  {
    id: 5,
    name: 'Quần jean phong cách 10',
    slug: 'quan-jean-phong-cach-10',
    description: 'Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào',
    price: '189000',
    category_id: 3,
    created_at: new Date('2022-12-21T05:00:00.000Z'),
    updated_at: new Date('2022-12-21T05:00:00.000Z')
  },
  {
    id: 6,
    name: 'Quần jean 11',
    slug: 'quan-jean-11',
    description: 'Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào',
    price: '189000',
    category_id: 3,
    created_at: new Date('2022-12-21T06:00:00.000Z'),
    updated_at: new Date('2022-12-21T06:00:00.000Z')
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
