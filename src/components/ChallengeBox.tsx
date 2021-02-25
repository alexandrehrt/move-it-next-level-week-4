import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  // Reiniciar cronômetro quando o desafio for finalizado
  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  };

  // Reiniciar cronômetro quando o desafio não for finaizado
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p className='textFont'>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type='button' 
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
             >
               Falhei
            </button>

            <button 
              type='button' 
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
              >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong className='textFont'>Finalize um ciclo para receber um desafio</strong>
          <p className="textFont">
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}