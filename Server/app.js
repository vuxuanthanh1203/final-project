require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const app = express()

// Load Schemas & resolves & context
const typeDefs = require('./schemas/schema')
const resolvers = require('./resolvers/index')
// const context = require('./contexts/context')

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  server.applyMiddleware({ app })
}

startApolloServer()

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
