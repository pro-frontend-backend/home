import { ApolloServer } from 'apollo-server'
import gql from 'graphql-tag'
import typeDefs from '../src/types'
import resolvers from '../src/resolvers'
import loaders from '../src/loaders'
import { createTestClient } from 'apollo-server-testing'
const GET_HISTORY = gql`
  query historyQuery($contractId: Int, $startDate: String, $endDate: String) {
    history(contractId: $contractId, startDate: $startDate, endDate: $endDate) {
      sum
      items {
        id
      }
    }
  }
`

const ADD_PAYMENT = gql`
  mutation addPaymentMutation($payment: PaymentInput!) {
    create(payment: $payment) {
      id
    }
  }
`

describe('queries', () => {
  let query, mutate
  beforeAll(() => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => {
        return { loaders }
      },
    })

    const testClient = createTestClient(server)
    query = testClient.query
    mutate = testClient.mutate
  })

  it('runs query', async () => {
    const res = await query({
      query: GET_HISTORY,
      variables: {
        contractId: 17689,
        startDate: '2016-12-09T00:00:00.00Z',
        endDate: '2016-12-10T00:00:00.00Z',
      },
    })
    expect(res.data.history.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1366 }),
        expect.objectContaining({ id: 1365 }),
      ])
    )
  })

  it('runs mutation', async () => {
    const res = await mutate({
      query: ADD_PAYMENT,
      variables: {
        payment: {
          id: 2,
          contractId: 123,
          value: 123,
          time: '123',
          isImported: false,
          createdAt: '2016-12-09T12:57:31.393Z',
          updatedAt: '123',
          isDeleted: false,
          description: 'hope is a good thing',
        },
      },
    })
    expect(res.data.create.id).toBe(2)
  })
})
