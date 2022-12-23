const fs = require('fs')
const fastCsv = require('fast-csv')
const Product = require('../models').Product

const exportData = async () => {
  const dataDB = await Product.findAll({
    attributes: ['id', 'name', 'shortDescription', 'productImg', 'categoryId']
  })

  const dataProduct = dataDB.map((item) => {
    return item.dataValues
  })

  const fileName = Date.now() + '_products.csv'

  const ws = fs.createWriteStream(`public/${fileName}`)

  fastCsv
    .write(dataProduct, { headers: true })
    .on('finish', () => console.log('Exported!'))
    .on('error', () => console.log('Error!'))
    .pipe(ws)

  return 'Exported file: ' + fileName
}

module.exports = exportData
