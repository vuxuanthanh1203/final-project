const exportOrderData = require('../../export/exportOrderData')

describe('testExportUserData', () => {
  test('test export user data', async () => {
    const result = await exportOrderData()

    expect(result).toMatch(/.csv/)
  })
})
