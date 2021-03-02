import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';

import styles from '../styles/pages/Index.module.css';


export default function Home() {
  const [userLogin, setUserLogin] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  
  
};

  return (
    <div className={styles.container}>
      <img src="logo-big.svg" />

      <div className={styles.loginContainer}>
        <img src="logo.svg" alt="Move It"/>
        <span id={styles.welcome}>Bem-vindo</span>
        <div className={styles.inputContainer}>
          <img src="github-icon.png" alt="Github"/>
          <span>Faça login com seu Github para começar</span>
        </div>
        <form onSubmit={e => handleSubmit(e)} className={styles.form} >
          <input 
            type="text" 
            placeholder='Digite seu username' 
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <button
            type='submit'
            style={userLogin === '' ?
             {backgroundColor: '#4953b8'} 
             : 
             { backgroundColor: '#4ab64a'}}
          >
            <FeatherIcon 
              className={styles.feather} 
              icon='arrow-right' 
              />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  )
}