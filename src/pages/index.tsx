import type { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'
import Button from '../components/Common/Button'
import { fetchAndValidate } from '../lib/fetch'
import { getUsers } from '../api/users'
import useSWR from 'swr'
import { User } from '../types/user'
import { useRouter } from 'next/router'

const Home: FC = () => {

  const { data: users } = useSWR(
    getUsers(),
    fetchAndValidate)

  const router = useRouter();
  const year = new Date().getFullYear()

  const handleClick = (id) => {
    console.log(id)
    router.push(`/conversation/${id}`)
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
          Chose a user to see their inbox
        </p>

        <div className={styles.grid}>
          {users ? users.map((user) => <Button key={user.id}  text={user.nickname} onClick={e => handleClick(user.id)} />) : ''}


        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Mugisha Kakou - {year}
      </footer>
    </div>
  )
}

export default Home