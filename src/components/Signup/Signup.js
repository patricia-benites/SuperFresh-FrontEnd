import styles from './Signup.module.css'

export function Signup() {
  return (
    <div className={styles.container}>
      
      <form className={styles.signupForm}>
          <h2>CREATE AN ACCOUNT</h2>
          <br></br>
          <input placeholder='firstName'></input>
          <input placeholder='lasttName'></input>
          <input placeholder='email'></input>
          <input placeholder='password'></input>
          <p>By creating an account, I consent to the processing of my personal
  data in accordance with the <b>PRIVACY POLICY</b></p>
          <button>CREATE</button>
      </form>
    </div>
  )
}

