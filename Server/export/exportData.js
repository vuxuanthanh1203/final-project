const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')
const queryData = require('../data/queryData')

const exportData = async () => {
  const dataDB = await queryData.getAllProducts()

  const dataProduct = dataDB.map((item) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    price: item.price,
    description: item.description,
    categoryName: item.category.name
  }))

  const baseDerectory = path.join(__dirname, '../../Server/public/')

  const fileName = Date.now() + '_products.csv'
  const fileUrl = path.join(baseDerectory, fileName)

  const ws = fs.createWriteStream(`public/${fileName}`)

  fastCsv
    .write(dataProduct, { headers: true })
    .on('finish', () => console.log('Exported!'))
    .on('error', () => console.log('Error!'))
    .pipe(ws)

  return fileUrl
}

module.exports = exportData
