require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')

// Load Schemas & resolves & context
const typeDefs = require('./schemas/schema')
const resolvers = require('./resolvers/index')

const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js')
const { getUserByToken } = require('./utils/getUserByToken')

// const { makeExecutableSchema } = require('@graphql-tools/schema')
// const { applyMiddleware } = require('graphql-middleware')
// const { rule, shield } = require('graphql-shield')

// const isAuthenticated = rule()(async (parent, args, ctx) => {
//   if (!ctx.auth_user || !ctx.auth_user.isAdmin) {
//     throw new Error()
//   }
//   return true
// })

const app = express()
app.use(cors())

// const schema = makeExecutableSchema({ typeDefs, resolvers })
// const permissions = shield({
//   Query: {
//     user: isAuthenticated
//   }
// })
// const schemaWithPermissions = applyMiddleware(schema, permissions)

const startApolloServer = async (req, res) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const user = await getUserByToken(req)
      // return user ? { auth_user: user } : null
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
