// @ts-check
'use strict'

const fastCsv = require('fast-csv')
const User = require('../models').User
const ImportUserMutationResolver = {
  Mutation: {

    async importUser (parent, { file }, context) {
      const myfile = await file
      const totalRecords = []

      myfile.createReadStream()
        .pipe(fastCsv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => totalRecords.push(row))
        .on('end', async rowCount => {
          await User.bulkCreate(totalRecords)
        })
      return {
        message: 'Imported !'
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
