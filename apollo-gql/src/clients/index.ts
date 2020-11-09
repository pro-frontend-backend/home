import { Payment } from '../types/Payment'
let defaultValues: Payment[] = [
  {
    id: 1366,
    contractId: 17689,
    description: 'Rent payment',
    value: 100,
    time: '2016-12-09T00:00:00.00Z',
    isImported: false,
    createdAt: '2016-12-09T12:57:31.393Z',
    updatedAt: '2016-12-09T12:57:31.393Z',
    isDeleted: false,
  },
  {
    id: 1365,
    contractId: 17689,
    description: 'Rent to be paid',
    value: -100,
    time: '2016-12-09T00:00:00.00Z',
    isImported: false,
    createdAt: '2016-12-09T12:57:09.708Z',
    updatedAt: '2016-12-09T12:57:09.709Z',
    isDeleted: false,
  },
]

const push = (payment: Payment) => {
  defaultValues.push(payment)
}
const remove = (id: number) => {
  defaultValues = defaultValues.filter((payment: Payment) => payment.id !== id)
}

const client = {
  getPayments: (contractId) => {
    return defaultValues.filter(
      (payment: Payment) => payment.contractId === contractId
    )
  },
  getPayment: (id) =>
    defaultValues.find((payment: Payment) => payment.id === id),
  addPayment: (payment: Payment) => {
    if (!defaultValues.includes(payment)) push(payment)
  },
  deletePayment: (id: number) => {
    remove(id)
  },
  updatePayment: (payment: Payment) => {
    remove(payment.id)
    push(payment)
  },
}

export default client
