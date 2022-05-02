import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai"
import { useContext } from "react";
import { AuthContext } from "../../context/context";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.wrapper}>
          <div className={styles.leftContainer}>
            <h1>SuperFresh</h1>
          </div>
          <div className={styles.searchContainer}>
            <input type="text"/>
            <AiOutlineSearch style={{color:"gray", fontSize: "16px"}}/>
          </div>
          <div className={styles.rightContainer}>
            {user && <div className="user">
              <span>Hello </span>
              <span>{user.firstName}</span>
            </div>}
            {!user && <Link to='/signup' style={{color:"black"}} >REGISTER</Link>}
            {!user && <Link to='/login' style={{color:"black"}}>LOGIN</Link> }
            <Link to='/cart'><AiOutlineShoppingCart size="1.3em" style={{color:"black"}}/></Link>  
          </div>
      </div>
    </div>
  );
}
