import { gql } from '@apollo/client'

export const HISTORY = gql`
  query historyQuery($contractId: Int, $startDate: String, $endDate: String) {
    history(contractId: $contractId, startDate: $startDate, endDate: $endDate) {
      sum
      items {
        id
        value
        time
        description
      }
    }
  }
`
export const REMOVE_PAYMENT = gql`
  mutation deletePaymentMutation($id: Int!) {
    delete(id: $id) {
      id
    }
  }
`
