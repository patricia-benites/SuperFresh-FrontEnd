import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai"

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          <div className={styles.leftContainer}>
            <h1>SuperFresh</h1>
          </div>
          <div className={styles.searchContainer}>
            <input type="text"/>
            <AiOutlineSearch style={{color:"gray", fontSize: "16px"}}/>
          </div>
          <div className={styles.rightContainer}>
            <Link to='/signup' style={{color:"black"}} >REGISTER</Link>
            <Link to='/login' style={{color:"black"}}>LOGIN</Link> 
            <Link to='/cart'><AiOutlineShoppingCart size="1.3em" style={{color:"black"}}/></Link>  
          </div>
      </div>
    </div>
  );
}
