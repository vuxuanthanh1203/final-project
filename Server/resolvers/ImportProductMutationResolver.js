// @ts-check
'use strict'

const fastCsv = require('fast-csv')
const Product = require('../models').Product
const ImportProductMutationResolver = {
  Mutation: {

    async importProduct (parent, { file }, context) {
      const myfile = await file
      const totalRecords = []

      myfile.createReadStream()
        .pipe(fastCsv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => totalRecords.push(row))
        .on('end', async rowCount => {
          await Product.bulkCreate(totalRecords)
        })

      return {
        message: 'Imported !'
      }
    }
  }
}

module.exports = ImportProductMutationResolver

/**
 * @typedef {{
 *  message: string
 * }} ImportResult
 */
