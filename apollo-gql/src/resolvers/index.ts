import client from '../clients'
import { Payment } from '../types/Payment'

const resolvers = {
  Query: {
    history: async (_: any, args: any, { loaders }) => {
      const paymentsByContract = await loaders.payments.load(args.contractId)
      if (paymentsByContract.length) {
        const items = paymentsByContract.filter(
          ({ createdAt }) =>
            Date.parse(args.startDate) <= Date.parse(createdAt) &&
            Date.parse(args.endDate) >= Date.parse(createdAt)
        )
        const sum = items.reduce((acc: number, payment: Payment) => {
          return acc + payment.value
        }, 0)
        return { sum, items }
      }
      return { sum: 0, items: [] }
    },
  },
  Mutation: {
    create: async (_: any, { payment }, { loaders }) => {
      client.addPayment(payment)
      return await loaders.payment.load(payment.id)
    },
    delete: async (_: any, { id }) => {
      client.deletePayment(id)
      return id
    },
    update: async (_: any, payment: Payment, { loaders }) => {
      client.updatePayment(payment)
      return await loaders.payment.load(payment.id)
    },
  },
}
export default [resolvers]
