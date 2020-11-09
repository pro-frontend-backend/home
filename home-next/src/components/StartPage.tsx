import Form from './Form'
import Header from './Header'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  width: calc(100% - 30px);
  max-width: 500px;
  background: rgba(255, 255, 255, 0.6);
  padding-bottom: 60px;
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
