import React from 'react'
import initApollo from './api'
import { GetServerSideProps } from 'next'
import { useQuery } from '@apollo/client'
import { HISTORY } from './api/queries'
import Payments from '../src/components/Payments'

const PaymentsPage = ({ contractId, startDate, endDate }) => {
  const { loading, error, data } = useQuery(HISTORY, {
    variables: { contractId, startDate, endDate },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return <Payments history={data.history} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  //Default for presentation purposes
  const {
    contractId = 17689,
    startDate = '2016-12-09T00:00:00.00Z',
    endDate = '2016-12-10T00:00:00.00Z',
  } = query
  const apolloClient = initApollo()

  await apolloClient.query({
    query: HISTORY,
    variables: { contractId, startDate, endDate },
  })

  return {
    props: {
      contractId,
      startDate,
      endDate,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default PaymentsPage
