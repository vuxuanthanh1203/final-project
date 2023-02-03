// @ts-check
'use strict'

const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')

const orderQueryResolver = require('./OrderQueryResolver')

const ExportOrderMutationResolver = {
  Mutation: {
    /**
     * @returns {Promise<ExportFileResult>}
     */
    async exportOrder (parent, args, context) {
      const dataDB = await orderQueryResolver.Query.orders()

      const dataOrder = dataDB.map((item) => ({
        id: item.id,
        name: item.user.name,
        email: item.user.email,
        phoneNumber: item.user.phoneNumber,
        address: item.user.address,
        shippingMethod: item.shippingMethod.name
      }))

      const baseDerectory = path.join(__dirname, '../../Server/public/')

      const fileName = Date.now() + '_orders.csv'
      const fileUrl = path.join(baseDerectory, fileName)

      const ws = fs.createWriteStream(`public/${fileName}`)

      fastCsv
        .write(dataOrder, { headers: true })
        .on('finish', () => console.log('Exported!'))
        .on('error', () => console.log('Error!'))
        .pipe(ws)

      return { fileUrl }
    }
  }
}
module.exports = ExportOrderMutationResolver

/**
 * @typedef {{
 *  fileUrl: string
 * }} ExportFileResult
 */
