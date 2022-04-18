import styles from "./Footer.module.css";
import { GrFacebook, GrMailOption, GrTwitter, GrPhone } from "react-icons/gr";
import {AiOutlineShoppingCart} from "react-icons/ai"

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <GrFacebook color="3B5999" />
       
        <GrTwitter color="55ACEE" />
      </div>
      <div className={styles.centerContainer}>
         <Link to="/home">Home</Link>
         <Link to='/cart'><AiOutlineShoppingCart size="1.3em"/></Link> 
      </div>
      <div className={styles.rightContainer}>
      <h3>Contact</h3>
        <GrPhone/> +1 234 56 78
        <GrMailOption/> contact@superfresh.com
        </div>
    </div>
  );
}
