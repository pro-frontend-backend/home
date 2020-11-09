import Head from 'next/head'
import StartPage from '../src/components/StartPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@100&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StartPage />
    </div>
  )
}
