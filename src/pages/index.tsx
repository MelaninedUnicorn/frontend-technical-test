import type { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'
import Button from '../components/Common/Button'


import { useRouter } from 'next/router'

const Home: FC = () => {



  const router = useRouter();
  const year = new Date().getFullYear()

  const handleClick = (e) => {
    router.push(`/conversation`)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt="Leboncoin's logo" width={400} height={125} />


        <p className={styles.description}>
          Welcome
        </p>

        <div className={styles.grid}>
           <Button text={'Go To Inbox'} onClick={ handleClick} />


        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Mugisha Kakou - {year}
      </footer>
    </div>
  )
}

export default Home