import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Player from '../components/Player'
import PlayerCSS from '../components/PlayerCSS'

export default function Home() {
  const videoJsOptions = {
    techOrder: ['youtube'],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=lRQ5z7i7pxE',
        type: 'video/youtube',
      },
    ],
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Миний NextJS сайт</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Тавтай морил: <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
        Энэхүү сайтыг
          <code className={styles.code}>https://1234.mn/course/109</code>{" "}
          хичээлээр бүтээв
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Миний тухай &rarr;</h2>
            <p>Би Next.js React, Javascript технологиудад дуртай</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Хобби &rarr;</h2>
            <p>Ном унших, кино үзэх, хөдөө аялах дуртай </p>
          </a>

          <Player {...videoJsOptions} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Технологи{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
