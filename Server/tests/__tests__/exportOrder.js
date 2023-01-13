const resolvers = require('../../resolvers/index')

describe('testExportOrder', () => {
  test('test export order data', async () => {
    const result = await resolvers.Mutation.exportOrder()

    expect(result.fileUrl).toMatch(/.csv/)
  })
})
