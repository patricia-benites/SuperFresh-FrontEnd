import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai"

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h2>SuperFresh</h2>
      </div>
      <div className={styles.searchContainer}>
        <input type="text"/>
        <AiOutlineSearch/>
      </div>
      <div className={styles.rightContainer}>
      
        <Link to='/signup' style={{color:"yellowgreen"}} >REGISTER</Link>
        <Link to='/login' style={{color:"yellowgreen"}}>LOGIN</Link> 
        <Link to='/cart'><AiOutlineShoppingCart size="1.3em" style={{color:"yellowgreen"}}/></Link>  
      </div>
    </div>
  );
}
