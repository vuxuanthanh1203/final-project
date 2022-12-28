const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')
const User = require('../models').User

const exportData = async () => {
  const dataDB = await User.findAll({
    attributes: ['id', 'name', 'userName', 'email', 'phoneNumber', 'address']
  })

  const dataUser = dataDB.map((item) => {
    return item.dataValues
  })

  const baseDerectory = path.join(__dirname, '../../Server/public/')

  const fileName = Date.now() + '_users.csv'
  const fileUrl = path.join(baseDerectory, fileName)

  const ws = fs.createWriteStream(`public/${fileName}`)

  fastCsv
    .write(dataUser, { headers: true })
    .on('finish', () => console.log('Exported!'))
    .on('error', () => console.log('Error!'))
    .pipe(ws)

  return fileUrl
}

module.exports = exportData
