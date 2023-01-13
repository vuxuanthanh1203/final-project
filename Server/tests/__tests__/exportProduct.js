const resolvers = require('../../resolvers/index')

describe('testExportProduct', () => {
  test('test export product data', async () => {
    const result = await resolvers.Mutation.exportProduct()

    expect(result.fileUrl).toMatch(/.csv/)
  })
})
