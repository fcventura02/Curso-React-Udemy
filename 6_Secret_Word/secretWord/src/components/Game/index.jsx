import styles from "./index.module.css";

const Game = ({ clickSair }) => {
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
          <p className={styles.placar_pontos}>0 pts</p>
        </div>
      </header>
      <main className={styles.game_container}>
        <h1 className={styles.game_title}>Adivinhe a Palavra</h1>
        <p className={styles.game_text}>💡 Dica: </p>
        <div className={styles.game_palavra}>
            <div className={styles.game_letra}>_</div>
        </div>
        <p className={`${styles.game_progresso} ${styles.game_text}`}>Progresso: 0% revelado</p>
        <div className={styles.game_interacao_container}>
          <input type="text" maxLength={1}/>
          <button className="btn primary btn_content">Tentar</button>
        </div>
      </main>
    </>
  );
};
export default Game;
