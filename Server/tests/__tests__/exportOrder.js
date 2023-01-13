const resolvers = require('../../resolvers/index')

describe('testExportOrder', () => {
  test('test export order data', async () => {
    const received = await resolvers.Mutation.exportOrder()

    expect(received.fileUrl).toMatch(/.csv/)
  })
})
