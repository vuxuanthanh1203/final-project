require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const path = require('path')

// Load Schemas & resolves & context
const typeDefs = require('./schemas/schema')
const resolvers = require('./resolvers/index')

const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js')
const { getUserByToken } = require('./utils/getUserByToken')

const app = express()
app.use(express.static(path.join(__dirname, './upload')))
app.use(express.static(path.join(__dirname, './export')))
app.use(cors())

const startApolloServer = async (req, res) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const user = await getUserByToken(req)
      return user || null
    }
  })

  app.use(graphqlUploadExpress({
    maxFileSize: 1000000000,
    maxFiles: 10
  }))

  await server.start()

  server.applyMiddleware({ app })
}

startApolloServer()

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
