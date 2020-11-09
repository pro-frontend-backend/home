import Form from './Form'
import Header from './Header'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StartPage = ({}) => {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  )
}

export default StartPage
