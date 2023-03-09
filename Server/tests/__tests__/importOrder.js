const resolvers = require('../../resolvers/index')

const parent = null
const context = null

describe('Import Data', () => {
  test('Import Order Data', async () => {
    const fileName = 'orderData.csv'
    const args = {
      fileName
    }

    const received = await resolvers.Mutation.importOrder(parent, args, context)

    expect(received).toBeTruthy()
  })
})
