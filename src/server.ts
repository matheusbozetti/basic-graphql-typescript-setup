import { resolve } from 'path'
import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import { importSchema } from 'graphql-import'

const schema = './schemas/index.graphql'
const typeDefs = importSchema(resolve(__dirname, schema))

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
