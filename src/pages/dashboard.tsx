import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { BiSun, BiMoon } from 'react-icons/bi';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';


interface HomeProps {
  level: number; 
  currentExperience: number; 
  challengesCompleted: number;
}

export default function Dashboard(props: HomeProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Verificar o tema atual no localstorage
  useEffect(() => {
    const json = localStorage.getItem('site-dark-mode');
    const currentMode = JSON.parse(json);
    currentMode ? setDarkMode(true) : setDarkMode(false);
  }, []);

  useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove("dark");

    // salvar o tema no localstorage
    const json = JSON.stringify(darkMode);
    localStorage.setItem('site-dark-mode', json);
  }, [darkMode])

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}  
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <div className={styles.switch}>
          <BiMoon color="#647dcf"/>
          <Switch
            className={styles.switch}
            onChange={() => setDarkMode(!darkMode)}
            checked={!darkMode}
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

        <CountdownProvider>
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
        </CountdownProvider>
    </div>
  </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted),
    }
  }
}