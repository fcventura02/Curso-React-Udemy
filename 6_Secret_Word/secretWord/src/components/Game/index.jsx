import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";

const Game = ({ clickSair, secretWord, getSecretWord, somaTotalScore }) => {
  const [lettersWord, setLetterWord] = useState([]);
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);
  const [guesses] = useState(6);
  const [score, setScore] = useState(0);
  const [oldScore, setoldScore] = useState(0);
  const [progressLetter, setProgressLetter] = useState(0)
  const [letter, setLetter] = useState("");
  const [stateGame, setStateGame] = useState("Progress");
  const [alert, setAlert] = useState(false);

  const letterInputRef = useRef(null);

  function percentageCorrectLetters(unicLetters){
    setProgressLetter(((guessedLetter.length / unicLetters.length) * 100).toFixed(0))
  }

  function verifyLetter(letter) {
    if (guessedLetter.includes(letter) || wrongLetter.includes(letter)) {
      setAlert(true);
      setTimeout(() => setAlert(false), 4000);
      return;
    }

    if (guesses === wrongLetter.length) {
      setStateGame("GameOver");
    }

    if (lettersWord.includes(letter)) {
      setGuessedLetter((guessedLetter) => [...guessedLetter, letter]);
      const contaLetrasCorretas = lettersWord.filter(
        (letterWord) => letterWord === letter
      ).length;
      setScore((score) => score + 100 * contaLetrasCorretas);
      return;
    }

    setWrongLetter((wrongLetter) => [...wrongLetter, letter]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  function resetGame() {
    getSecretWord();
    setGuessedLetter([]);
    setWrongLetter([]);
    setLetter([]);
    setStateGame("Progress");
  }

  useEffect(() => {
    if (wrongLetter.length >= guesses) {
      setStateGame("GameOver");
    }
  }, [guesses, wrongLetter]);

  useEffect(() => {
    setLetterWord(secretWord.word.split(""));
  }, [secretWord]);

  useEffect(() => {
    const uniqLetters = [...new Set(lettersWord)];
    percentageCorrectLetters(uniqLetters)
    if (uniqLetters.length === guessedLetter.length && uniqLetters.length > 0) {
      somaTotalScore(score - oldScore);
      setStateGame("Win");
      setoldScore((value) => (value += score));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetter, lettersWord]);

  return (
    <>
      <header className={styles.header}>
        <button onClick={clickSair} className="btn btn_outline btn_content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Voltar
        </button>
        <div className={styles.placar_container}>
          <h4 className={styles.placar_titulo}>🏆 Pontuação</h4>
          <p className={styles.placar_pontos}>{score} pts</p>
        </div>
      </header>
      <main className={styles.game_container}>
        <h1 className={styles.game_title}>Adivinhe a Palavra</h1>
        <p className={styles.game_text}>💡 Dica: {secretWord.hint}</p>
        <div className={styles.game_palavra}>
          {lettersWord.map((letter, index) =>
            guessedLetter.includes(letter) ? (
              <div
                key={index}
                className={`${styles.game_letra} ${styles.game_letra_correta}`}
              >
                {letter}
              </div>
            ) : (
              <div key={index} className={`${styles.game_letra}`}>
                _
              </div>
            )
          )}
        </div>
        <p className={`${styles.game_progresso} ${styles.game_text}`}>
          Progresso: {progressLetter}% revelado
        </p>
        <form
          onSubmit={handleSubmit}
          className={styles.game_interacao_container}
        >
          <input
            type="text"
            required
            maxLength={1}
            onChange={(e) => setLetter(e.target.value.toUpperCase())}
            value={letter}
            ref={letterInputRef}
          />
          <button
            disabled={
              stateGame !== "Progress" ||
              lettersWord.length === guessedLetter.length
            }
            className="btn primary btn_content"
          >
            Tentar
          </button>
        </form>
        <div className={styles.game_container_letras_utilizadas}>
          <p>Letras Incorretas: ({wrongLetter.length}/6)</p>
          <ul className={styles.game_lista_letras_utilizadas}>
            {wrongLetter?.map((letter, i) => (
              <li key={i} className={styles.game_letras_utilizadas}>
                {letter}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${styles.finish_game} ${
            stateGame === "GameOver" && styles.finish_gameOver
          } ${stateGame === "Win" && styles.finish_win}`}
        >
          {stateGame === "GameOver" && (
            <div>
              <p>
                <b>😞 Fim de Jogo</b>
              </p>
              <p>A palavra era: {lettersWord.join("")}</p>
            </div>
          )}
          {stateGame === "Win" && (
            <div>
              <p>
                <b>🎊 Você ganhou! 🎊</b>
              </p>
              <p>Sua pontuação foi de: {score}</p>
            </div>
          )}
          <button className="btn primary btn_content" onClick={resetGame}>
            Jogar Novamente
          </button>
        </div>
        <div className={`${styles.alert} ${alert && styles.alert_open}`}>
          <p>Letra já tentada!</p>
          <p>Você já tentou essa letra.</p>
        </div>
      </main>
    </>
  );
};
export default Game;
