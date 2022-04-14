import React from "react";
import styles from "./Navbar.module.css";


export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h2>SuperFresh</h2>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search ...."></input>
      </div>
      <div className={styles.rightContainer}>
        <p>Signup</p>
        <p>Login</p>
        <p>Cart</p>
      </div>
    </div>
  );
}
