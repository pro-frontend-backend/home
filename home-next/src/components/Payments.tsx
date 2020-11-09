import { useState } from 'react'
import { Label, Container, StartPageContainer } from './styles'
import { useMutation } from '@apollo/client'
import { REMOVE_PAYMENT } from '../../pages/api/queries'
import Header from './Header'

const Payments = ({ history }) => {
  const [listItems, setListItems] = useState([...history.items])
  const [
    removePayment,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(REMOVE_PAYMENT)

  return (
    <StartPageContainer>
      <Header />
      <h1>History </h1>
      <Container>
        {listItems.map((payment: any) => {
          const time = new Date(payment.time)
          const formattedTime = `${time.getFullYear()}-${time.getMonth()}-${
            time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
          }`
          return (
            <Label key={payment.id}>
              {payment.id} - {formattedTime} : {payment.value} -{' '}
              {payment.description} -{' '}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault()
                  removePayment({ variables: { id: payment.id } })
                  const newList = [...listItems]
                  setListItems(newList.filter((item) => item.id !== payment.id))
                }}
              >
                Remove
              </a>
            </Label>
          )
        })}
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error :( Please try again</p>}
      </Container>
    </StartPageContainer>
  )
}

export default Payments
