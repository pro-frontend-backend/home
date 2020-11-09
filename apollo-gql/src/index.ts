import { ApolloServer } from 'apollo-server'
import typeDefs from './types'
import resolvers from './resolvers'
import loaders from './loaders'

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { loaders }
  },
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
