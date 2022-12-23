const fs = require('fs')
const fastCsv = require('fast-csv')
const Product = require('../models').Product
const ExportProduct = require('../models').ExportProduct

const exportData = async () => {
  const dataDB = await Product.findAll({
    attributes: ['id', 'name', 'shortDescription', 'productImg', 'categoryId']
  })

  const dataProduct = dataDB.map((item) => {
    return item.dataValues
  })

  const fileUrl = Date.now() + '_products.csv'

  const ws = fs.createWriteStream(`public/${fileUrl}`)

  fastCsv
    .write(dataProduct, { headers: true })
    .on('finish', () => console.log('Exported!'))
    .pipe(ws)

  await ExportProduct.create({
    fileUrl,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return ExportProduct.findByPk(1)
}

module.exports = exportData
