// @ts-check
'use strict'

const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')

const User = require('../models').User

const ImportUserMutationResolver = {
  Mutation: {
    /**
     * @param {{
     *  fileName: string
     * }} args - Args of this resolver
    * @returns {Promise<ImportResult>}
     */
    async importUser (parent, args, context) {
      const fileName = args.fileName
      const totalRecords = []
      try {
        // console.log(path.join(__dirname, '../../Server/public/' + fileName))
        fs.createReadStream(path.join(__dirname, '../../Server/public/import' + fileName))
          .pipe(fastCsv.parse({ headers: true }))
          .on('error', error => console.error(error))
          .on('data', row => totalRecords.push(row))
          .on('end', async rowCount => {
            await User.bulkCreate(totalRecords)
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

module.exports = ImportUserMutationResolver

/**
 * @typedef {{
 *  message: string
 * }} ImportResult
 */