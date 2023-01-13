const resolvers = require('../../resolvers/index')

describe('testExportUser', () => {
  test('test export user data', async () => {
    const result = await resolvers.Mutation.exportUser()

    expect(result.fileUrl).toMatch(/.csv/)
  })
})
