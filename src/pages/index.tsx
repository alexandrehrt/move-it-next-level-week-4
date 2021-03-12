import Head from 'next/head';

import {signIn, useSession } from 'next-auth/client'

import styles from '../styles/pages/Index.module.css';

export default function Home() {

  const [ session, loading ] = useSession()
  console.log(session);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <img src="logo-big.svg" />

      <div className={styles.loginContainer}>
        <img src="logo.svg" alt="Move It"/>

        <h3 id={styles.welcome}>Bem-vindo</h3>

        <div className={styles.inputContainer}>
          <img src="/icons/github.svg" alt="Github"/>
          <p>Faça login com seu Github para começar</p>
        </div>

        <button type='button' onClick={() => signIn()}>Entrar com GitHub</button>
      </div>
    </div>
  )
}