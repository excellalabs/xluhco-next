import Head from 'next/head'
import Image from 'next/image'
import { env } from 'process'
import styles from '../styles/Home.module.css'
import {getLinks} from '../lib/db'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>xluh.co</title>
        <meta name="description" content="xluh.co URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the xluh.co url shortener { process.env.AZURE_TABLES_ENDPOINT}
        </h1>
      </main>


    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getLinks();
  console.log(res);
  // // Pass data to the page via props
  return { props: { } }
}
