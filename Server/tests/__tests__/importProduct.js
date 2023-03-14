const resolvers = require('../../resolvers/index')

const parent = null
const context = null

describe('Import Data', () => {
  test('Import Product Data', async () => {
    const fileName = 'productData.csv'
    const args = {
      fileName
    }

    const received = await resolvers.Mutation.importProduct(parent, args, context)

    expect(received).toBeTruthy()
  })
})
