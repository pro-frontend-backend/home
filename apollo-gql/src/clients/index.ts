import { Payment } from '../types/Payment'
const defaultValues: Payment[] = [
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
const slice = (id: Number) =>
  defaultValues.splice(
    (defaultValues.findIndex((payment: Payment) => payment.id === id), 1)
  )

const client = {
  getPayments: (contractId) =>
    defaultValues.filter(
      (payment: Payment) => payment.contractId === contractId
    ),
  getPayment: (id) =>
    defaultValues.find((payment: Payment) => payment.id === id),
  addPayment: (payment: Payment) => {
    if (!defaultValues.includes(payment)) push(payment)
  },
  deletePayment: (id: Number) => slice(id),
  updatePayment: (payment: Payment) => {
    slice(payment.id)
    push(payment)
  },
}

export default client
