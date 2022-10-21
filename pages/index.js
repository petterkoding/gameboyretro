import Head from 'next/head'
import Console from '../components/Console'
import Layout from '../components/Layout'
// import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-yellow-500">
        <Layout/>
      </main>
        


      <footer>

      </footer>
    </div>
  )
}
