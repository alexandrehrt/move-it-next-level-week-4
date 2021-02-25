import Head from 'next/head';
import Switch from 'react-switch';
import { BiSun, BiMoon } from 'react-icons/bi';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    !theme ? document.body.classList.add('dark') : document.body.classList.remove("dark");
  }, [theme])

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <div className={styles.switch}>
        <BiMoon color="#647dcf"/>
        <Switch
          className={styles.switch}
          onChange={() => setTheme(!theme)}
          checked={theme}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={30}
          handleDiameter={15}
          onColor="#eec922"
          offColor="#647dcf"
          offHandleColor="#a59f9f"
          onHandleColor="#bdece6"
        />
        <BiSun color="#eec922" />
      </div>

        <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
  </div>
  )
}
