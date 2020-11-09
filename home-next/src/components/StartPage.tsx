import Form from './Form'
import Header from './Header'
import { StartPageContainer } from './styles'

const StartPage = ({}) => {
  return (
    <StartPageContainer>
      <Header />
      <h1>Home Signup</h1>
      <Form />
    </StartPageContainer>
  )
}

export default StartPage
