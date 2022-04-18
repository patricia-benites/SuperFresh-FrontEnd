import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { AuthContext } from "../../context/context";
import { useContext, useState } from "react";

export function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        ></input>
        <button>LOGIN</button>
        <Link to="/home" className={styles.Link}>
          DO NOT REMEMBER THE PASSWORD?
        </Link>
        <Link to="/signup" className={styles.Link}>
          CREATE A NEW ACCOUNT
        </Link>
      </form>
    </div>
  );
}
