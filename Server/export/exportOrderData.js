const fs = require('fs')
const path = require('path')
const fastCsv = require('fast-csv')
const queryData = require('../data/queryData')

const exportData = async () => {
  const dataDB = await queryData.getAllOrders()

  const dataOrder = dataDB.map((item) => {
    return ({
      id: item.id,
      name: item.user.name,
      email: item.user.email,
      phoneNumber: item.user.phoneNumber,
      address: item.user.address,
      orderStatus: item.orderStatus.status,
      shippingMethod: item.shippingMethod.name,
      productAttr: item.orderProductAttrs.map(orderAttr => {
        return ({
          quantity: orderAttr.quantity,
          price: orderAttr.price,
          value: orderAttr.productAttr.value
        })
      })
    })
  })

  const baseDerectory = path.join(__dirname, '../../Server/public/')

  const fileName = Date.now() + '_orders.csv'
  const fileUrl = path.join(baseDerectory, fileName)

  const ws = fs.createWriteStream(`public/${fileName}`)

  fastCsv
    .write(dataOrder, { headers: true })
    .on('finish', () => console.log('Exported!'))
    .on('error', () => console.log('Error!'))
    .pipe(ws)

  return fileUrl
}

module.exports = exportData
