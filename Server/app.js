const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const app = express()

// Load Schemas & resolves
const typeDefs = require('./schemas/schema')
const resolvers = require('./resolvers/resolver')

// Load query method
const queryData = require('./data/queryData')

// export data
const exportData = require('./export/exportData')
app.use('./public', express.static(__dirname + './public'))

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ queryData }) })
  await server.start()

  server.applyMiddleware({ app })
}

startApolloServer()
exportData()
app.listen(4000, () => {
  console.log('Server running on port 4000')
})
