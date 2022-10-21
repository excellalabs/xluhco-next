import Head from 'next/head'
import { env } from 'process'
import { getLinks, initTable } from '../lib/db'
import LinksList from '../components/LinksList'

import Header from '../components/Header'
import {Flasher} from "react-universal-flash";
import { SSRProvider } from 'react-bootstrap'

export default function Home({linksList}) {
  return (
    <div>
      <Head>
        <title>Xluh.co</title>
        <meta name="description" content="Xluh.co URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Flasher position="top_center"/>
      <div className="container">

        <main className="row py-5">
          <SSRProvider>

            <Header />
            <LinksList initialLinks={linksList}/>
          </SSRProvider>
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  await initTable();
  const linksList = await getLinks();
  return {
    props: { linksList }, // will be passed to the page component as props
  }
}
