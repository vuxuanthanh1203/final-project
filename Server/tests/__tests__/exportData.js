const exportData = require('../../export/exportData')

describe('testExportData', () => {
  test('test export prduct data', async () => {
    const result = await exportData()

    expect(result).toMatch(/.csv/)
  })
})
