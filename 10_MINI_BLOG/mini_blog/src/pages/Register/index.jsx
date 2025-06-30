import { useState } from "react";
import styles from "./register.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Seu Nome</span>
          <input
            type="text"
            name="Nome"
            placeholder="Nome"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Seu E-mail</span>
          <input
            type="email"
            name="E-mail"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Sua senha</span>
          <input
            type="password"
            name="Senha"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme sua senha</span>
          <input
            type="password"
            name="Confirme a senha"
            placeholder="Confirme a senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button disabled={loading} type="submit" className="btn">
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;
