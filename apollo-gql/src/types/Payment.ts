import { gql } from 'apollo-server'
export interface Payment {
  id: number
  contractId: number
  description: string
  value: number
  time: string
  isImported: boolean
  createdAt: string
  updatedAt: string
  isDeleted: boolean
}

const typeDefs = gql`
  type Payment {
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
`
export default typeDefs
