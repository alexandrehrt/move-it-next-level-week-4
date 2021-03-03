import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';

import styles from '../styles/pages/Index.module.css';


export default function Home() {
  const [userLogin, setUserLogin] = useState('');
  const [hasErrorMessage, setHasErrorMessage] = useState(false);

const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>):void => {
  event.preventDefault();
  userLogin === '' && setHasErrorMessage(true);
  
};

  return (
    <div className={styles.container}>
      <img src="logo-big.svg" />

      <div className={styles.loginContainer}>
        <img src="logo.svg" alt="Move It"/>
        <span id={styles.welcome}>Bem-vindo</span>
        <div className={styles.inputContainer}>
          <img src="/icons/github.svg" alt="Github"/>
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
        { hasErrorMessage && <p style={{color: '#d42323'}}>Insira um username válido</p> }
        <span></span>
      </div>
    </div>
  )
}