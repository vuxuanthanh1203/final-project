const resolvers = require('../../resolvers/index')

describe('testExportUser', () => {
  test('test export user data', async () => {
    const received = await resolvers.Mutation.exportUser()

    expect(received.fileUrl).toMatch(/.csv/)
  })
})
