import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Blog TAC</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <h1>Hello world from CNA with tailwindcss</h1>
    </div>
  )
}

export default Home
