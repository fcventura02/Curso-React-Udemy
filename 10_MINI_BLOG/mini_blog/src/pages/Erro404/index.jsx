import styles from "./Erro404.module.css";

import { Link } from "react-router-dom";

const Erro404 = () => {
  return (
    <div className={styles.erro404}>
      <h2>
        404
      </h2>
      <p>
        Pagina não encontrada
      </p>
      <Link to="/" className="btn">
        Voltar para o início
      </Link>
    </div>
  );
};

export default Erro404;