import { gql } from 'apollo-server'

const mutationDefs = gql`
  input PaymentInput {
    id: Int
    contractId: Int
    description: String
    value: Int
    time: String
    isImported: Boolean
    createdAt: String
    updatedAt: String
    isDeleted: Boolean
  }
  type Mutation {
    create(payment: PaymentInput!): Payment!
    delete(id: Int!): Payment
    update(payment: PaymentInput!): Payment!
  }
`
export default mutationDefs
