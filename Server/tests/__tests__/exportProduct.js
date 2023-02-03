const resolvers = require('../../resolvers/index')

describe('testExportProduct', () => {
  test('test export product data', async () => {
    const received = await resolvers.Mutation.exportProduct()

    expect(received.fileUrl).toMatch(/.csv/)
  })
})
