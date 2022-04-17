import { Link } from "react-router-dom";
import styles from './Login.module.css'


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
      };

  return (
    <div className={styles.container }> 
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input placeholder="username"></input>
            <input placeholder="password"></input>
            <button>LOGIN</button>
            <Link to='/home' className={styles.Link}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link to='/signup' className={styles.Link}>CREATE A NEW ACCOUNT</Link>
        </form>
    </div>
  )
}
