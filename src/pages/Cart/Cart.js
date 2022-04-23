import React from 'react'
import { Announcement } from '../../components/Announcement/Announcement'
import { Footer } from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
// import { AuthContext } from "../../context/context";
// import { useContext } from "react";
import { useEffect, useState } from "react";
import { client } from "../../client";
import { Newsletter } from '../../components/Newsletter/Newsletter';
import styles from "./Cart.module.css"

export function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const result = await client.get("/carts/find");
    setCart(result.data);
  };

  useEffect(() => {
    getCart();
  }, []);


  return (
    <div className={styles.pageContainer}>
        <Announcement/>
        <Navbar/>
        <div className={styles.cartContainer}>
          <h2>Your Shopping Cart</h2>
          <div className={styles.topContainer}>
            <button className={styles.leftButton}>CONTINUE SHOPPING</button>
            <div>
              <span>Shopping Cart</span>
              <span>Save for Later</span>
            </div>
            <button className={styles.rightButton}>CHECKOUT NOW</button>
          </div>
         <div className='rightContainer'></div>
          </div>
        <Footer/>
    </div>
  )
}
