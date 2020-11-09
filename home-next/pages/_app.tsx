import initApollo from './api'
import { ApolloProvider } from '@apollo/client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo', sans-serif;
  }
`
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={initApollo(pageProps.initialApolloState)}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
