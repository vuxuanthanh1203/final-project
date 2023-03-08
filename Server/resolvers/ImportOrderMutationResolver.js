// @ts-check
'use strict'

const fastCsv = require('fast-csv')
const Order = require('../models').Order
const ImportOrderMutationResolver = {
  Mutation: {

    async importOrder (parent, { file }, context) {
      const myfile = await file
      const totalRecords = []

      myfile.createReadStream()
        .pipe(fastCsv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => totalRecords.push(row))
        .on('end', async rowCount => {
          await Order.bulkCreate(totalRecords)
        })
      return {
        message: 'Imported !'
      }
    }
  }
}

module.exports = ImportOrderMutationResolver

/**
 * @typedef {{
 *  message: string
 * }} ImportResult
 */
