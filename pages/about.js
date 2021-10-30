import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.green}>About </div>
    </div>
  )
}
