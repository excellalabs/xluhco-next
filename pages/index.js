import Head from 'next/head'
import Image from 'next/image'
import { env } from 'process'
import styles from '../styles/Home.module.css'
import {getLinks} from '../lib/db'
import LinksList from '../components/LinksList'



function Home({linksList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xluh.co</title>
        <meta name="description" content="Xluh.co URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the xluh.co url shortener
        </h1>
        <LinksList links={linksList}/>
      </main>
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