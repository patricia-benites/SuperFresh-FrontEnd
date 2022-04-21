import styles from "./Newsletter.module.css"
import {IoMdSend} from "react-icons/io"

export function Newsletter() {
  return (
    <div className={styles.container}>
    <h1>Recipes Newsletter</h1>
    <p>Get inspiration for your recipes</p>
    <div className={styles.inputContainer}>
        <input placeholder="Your e-mail"></input>
        <button><IoMdSend/></button>
    </div>
    </div>
  )
}
