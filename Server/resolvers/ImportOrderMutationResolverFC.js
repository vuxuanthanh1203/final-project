// @ts-check
'use strict'

const fastCsv = require('fast-csv')
const Order = require('../models').Order
const ImportOrderMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - csv file input
      * @returns { Promise<ImportResult>}
      */
    async importOrder (parent, args, context) {
      const myfile = await args.file
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
