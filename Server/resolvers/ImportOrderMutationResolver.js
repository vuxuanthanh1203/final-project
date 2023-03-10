// @ts-check
'use strict'

const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')

const Order = require('../models').Order

const ImportOrderMutationResolver = {
  Mutation: {
    /**
     * @param {{
     *  fileName: string
     * }} args - Args of this resolver
     * @returns {Promise<ImportResult>}
     */
    async importOrder (parent, args, context) {
      const fileName = args.fileName
      const totalRecords = []

      try {
        fs.createReadStream(path.join(__dirname, `../public/import/${fileName}`))
          .pipe(fastCsv.parse({ headers: true }))
          .on('error', error => console.error(error))
          .on('data', row => totalRecords.push(row))
          .on('end', async rowCount => {
            await Order.bulkCreate(totalRecords)
          })
        return {
          message: 'Imported !'
        }
      } catch (error) {
        throw new Error(error)
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
