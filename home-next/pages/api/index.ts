import { ApolloClient, InMemoryCache } from '@apollo/client'

let ssrCache = false
let apolloClient: any = null

const create = (initialState: any) => {
  return new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache().restore(initialState),
  })
}
const initApollo = (initialState?: any) => {
  if (!process.browser) {
    return create(initialState)
  }
  if (apolloClient && !ssrCache) apolloClient.cache.restore(initialState)
  if (!apolloClient) apolloClient = create(initialState)

  return apolloClient
}

export default initApollo
