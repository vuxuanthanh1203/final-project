const exportUserData = require('../../export/exportUserData')

describe('testExportUserData', () => {
  test('test export user data', async () => {
    const result = await exportUserData()

    expect(result).toMatch(/.csv/)
  })
})
