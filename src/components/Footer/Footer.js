import styles from "./Footer.module.css";
import { GrFacebook, GrMailOption, GrTwitter, GrPhone } from "react-icons/gr";
import {AiOutlineShoppingCart} from "react-icons/ai"


import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
          <h2>SuperFresh</h2>
          <p>Follow us</p>
          <div className={styles.mediaContainer}>
            <GrFacebook color="3B5999" />
            <GrTwitter color="55ACEE" />
          </div>
       
      </div>
      <div className={styles.centerContainer}>
        <h2>Useful Links</h2>
         <Link to="/home" style={{color:"black", textDecoration:"none"}}>Home</Link>
         <Link to='/cart'><AiOutlineShoppingCart  size="1.3em" style={{color:"black", textDecoration:"none"}}/></Link> 
         <Link to="/pay" style={{color:"black", textDecoration:"none"}}>Pay</Link>
      </div>
      <div className={styles.rightContainer}>
      <h2>Contact</h2>
        <GrPhone /> <span>  +1 234 56 78</span>
        <GrMailOption/>contact@superfresh.com
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </div>
    </div>
  );
}
