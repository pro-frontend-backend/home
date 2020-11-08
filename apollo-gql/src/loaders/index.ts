import DataLoader from 'dataloader'
import client from '../clients'

const loaders = {
  payments: new DataLoader(async (ids) => {
    return Promise.all(ids.map((id) => client.getPayments(id)))
  }),
  payment: new DataLoader(async (ids) => {
    return Promise.all(ids.map((id) => client.getPayment(id)))
  }),
}

export default loaders
