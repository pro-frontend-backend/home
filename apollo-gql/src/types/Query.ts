import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    history(contractId: Int, startDate: String, endDate: String): History
  }
`
export default typeDefs
