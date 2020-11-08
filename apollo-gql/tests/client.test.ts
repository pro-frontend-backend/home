import client from '../src/clients'

const payment = {
  id: 1365,
  contractId: 17689,
  description: 'Rent to be paid',
  value: -100,
  time: '2016-12-09T00:00:00.00Z',
  isImported: false,
  createdAt: '2016-12-09T12:57:09.708Z',
  updatedAt: '2016-12-09T12:57:09.709Z',
  isDeleted: false,
}

const newPayment = {
  id: 1370,
  contractId: 17689,
  description: 'Rent to be paid',
  value: -200,
  time: '2016-12-09T00:00:00.00Z',
  isImported: false,
  createdAt: '2016-12-09T12:57:09.708Z',
  updatedAt: '2016-12-09T12:57:09.709Z',
  isDeleted: false,
}

describe('Client tests', () => {
  it('should get', () => {
    expect(client.getPayments(17689)).not.toBe(undefined)
  })
  it('should  not get', () => {
    expect(client.getPayment(-1)).toBe(undefined)
  })
  it('should add', () => {
    client.addPayment(newPayment)
    expect(client.getPayments(17689)).toContainEqual(newPayment)
  })
  it('should delete', () => {
    client.deletePayment(1370)
    expect(client.getPayments(17689)).not.toContainEqual(newPayment)
  })
  it('should update', () => {
    const updatedPayment = { ...payment, value: -450 }
    client.updatePayment(updatedPayment)
    const p = client.getPayment(payment.id)
    expect(p!.value).toBe(-450)
  })
})
