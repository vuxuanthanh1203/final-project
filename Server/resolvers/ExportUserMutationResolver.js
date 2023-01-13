const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')

const userQueryResolver = require('./UserQueryResolver')

const ExportUserMutationResolver = {
  Mutation: {
    /**
     * @returns {Promise<ExportFileResult>}
     */
    async exportUser (parent, args, context) {
      const dataDB = await userQueryResolver.Query.users()

      const dataUser = dataDB.map((item) => ({
        id: item.id,
        name: item.name,
        userName: item.userName,
        email: item.email,
        phoneNumber: item.phoneNumber,
        address: item.address,
        isAdmin: item.isAdmin
      }))

      const baseDerectory = path.join(__dirname, '../../Server/public/')

      const fileName = Date.now() + '_users.csv'
      const fileUrl = path.join(baseDerectory, fileName)

      const ws = fs.createWriteStream(`public/${fileName}`)

      fastCsv
        .write(dataUser, { headers: true })
        .on('finish', () => console.log('Exported!'))
        .on('error', () => console.log('Error!'))
        .pipe(ws)

      return { fileUrl }
    }
  }
}
module.exports = ExportUserMutationResolver

/**
 * @typedef {{
 *  fileUrl: string
 * }} ExportFileResult
 */
