import styles from "./Signup.module.css";
import { AuthContext } from "../../context/context";
import { useContext, useState } from "react";

export function Signup() {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(firstName, lastName, email, password);
  };

  return (
    <div className={styles.container}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h2>CREATE AN ACCOUNT</h2>
        <br></br>
        <label htmlFor="firstName">First name:</label>
        <input
          placeholder="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <label htmlFor="lastName">Last name:</label>
        <input
          placeholder="lasttName"
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          placeholder="password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <p>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <button>CREATE</button>
      </form>
    </div>
  );
}
