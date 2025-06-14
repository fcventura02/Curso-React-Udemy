import styles from "./index.module.css";
const StartScreen = ({ words = [], clickStart }) => {
  return (
    <>
      <div className={styles.title_container}>
        <span className={styles.title_icon}>🎯</span>
        <h1 className={styles.title}>
          Adivinhe
          <span className={styles.title_destaque}>a Palavra</span>
        </h1>
      </div>
      <p className={styles.subtitle}>
        Teste seus conhecimentos adivinhando palavras. <br /> Cada letra correta
        te aproxima da vitória!
      </p>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <span className={styles.card_icon}>🎮</span>
          <h3 className={styles.card_title}>Jogar</h3>
          <p className={styles.card_text}>
            Comece uma nova partida e desafie seus conhecimentos
          </p>
          <button onClick={clickStart} className="btn primary">
            Iniciar Jogo
          </button>
        </div>
        <div className={styles.card}>
          <span className={styles.card_icon}>📚</span>
          <h3 className={styles.card_title}>Adicionar Palavras</h3>
          <p className={styles.card_text}>
            Contribua com novas palavras para tornar o jogo mais interessante
          </p>
          <button className="btn btn_outline">Gerenciar palavras</button>
        </div>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <h3 className={styles.card_title}>📊 Suas Estatísticas</h3>
          <div className={styles.card_details}>
            <div>
              <span className={styles.card_number}>0</span>
              <p className={styles.card_text}>Recorde de pontos</p>
            </div>
            <div>
              <span className={styles.card_number}>{words.length}</span>
              <p className={styles.card_text}>Palavras Disponíveis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StartScreen;
