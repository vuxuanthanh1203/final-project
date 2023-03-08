// @ts-check
'use strict'

const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')

const productQueryResolver = require('./ProductQueryResolver')

const ExportProductMutationResolver = {
  Mutation: {
    /**
     * @returns {Promise<ExportFileResult>}
     */
    async exportProduct (parent, args, context) {
      const dataDB = await productQueryResolver.Query.products()

      const dataProduct = dataDB.map((item) => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        price: item.price,
        description: item.description,
        categoryName: item.category.name
      }))

      const baseDerectory = path.join(__dirname, '../export')

      const fileName = Date.now() + '_products.csv'
      const URL = `${process.env.BASE_URL}${process.env.PORT}`
      const fileUrl = `${URL}/${baseDerectory.split('export')[1]}${fileName}`

      const ws = fs.createWriteStream(`export/${fileName}`)

      const csvOptions = { writeBOM: true, headers: true }

      fastCsv
        .write(dataProduct, csvOptions)
        .on('finish', () => console.log('Exported!'))
        .on('error', () => console.log('Error!'))
        .pipe(ws)

      return { fileUrl }
    }
  }
}
module.exports = ExportProductMutationResolver

/**
 * @typedef {{
 *  fileUrl: string
 * }} ExportFileResult
 */
