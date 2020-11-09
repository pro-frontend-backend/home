import { gql } from 'apollo-server'
import { Payment } from './Payment'
export interface History {
  sum: number
  items: Payment[]
}

const typeDefs = gql`
  type History {
    sum: Int
    items: [Payment]
  }
`
export default typeDefs
