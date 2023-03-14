const resolvers = require('../../resolvers/index')

const parent = null
const context = null

describe('Import Data', () => {
  test('Import User Data', async () => {
    const fileName = 'userData.csv'
    const args = {
      fileName
    }

    const received = await resolvers.Mutation.importUser(parent, args, context)

    expect(received).toBeTruthy()
  })
})
