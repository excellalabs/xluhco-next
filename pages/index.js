import Head from 'next/head'
import { env } from 'process'
import {getLinks} from '../lib/db'
import LinksList from '../components/LinksList'
import UrlForm from '../components/UrlForm'
import Header from '../components/Header'



function Home({linksList}) {
  return (
    <div>
      <Head>
        <title>Xluh.co</title>
        <meta name="description" content="Xluh.co URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">

        <main className="row py-5">
          <Header />
          <UrlForm />
          <LinksList links={linksList}/>
        </main>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const linksList = await getLinks();
  return {
    props: { linksList }, // will be passed to the page component as props
  }
}

export default Home