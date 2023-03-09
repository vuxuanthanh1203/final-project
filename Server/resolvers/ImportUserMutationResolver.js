// @ts-check
'use strict'

const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')

const User = require('../models').User

const ImportUserMutationResolver = {
  Mutation: {

    async importUser (parent, args, context) {
      const fileName = args.fileName
      const totalRecords = []

      try {
        fs.createReadStream(path.join(__dirname, `../public/import/${fileName}`))
          .pipe(fastCsv.parse({ headers: true }))
          .on('error', error => console.error(error))
          .on('data', row => totalRecords.push(row))
          .on('end', async rowCount => {
            await User.bulkCreate(totalRecords)
          })
        return {
          success: true
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
 *  success: Boolean!
 * }} ImportResult
 */
