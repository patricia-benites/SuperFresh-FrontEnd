import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

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
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link> 
        <Link to='/cart'>Cart</Link>  
      </div>
    </div>
  );
}
