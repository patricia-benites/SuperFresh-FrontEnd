import React from 'react'
import { Announcement } from '../../components/Announcement/Announcement'
import { Footer } from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
// import { AuthContext } from "../../context/context";
// import { useContext } from "react";
// import { useEffect, useState } from "react";
// import { client } from "../../client";
import styles from "./Cart.module.css"
import CartProduct from "../../components/CartProduct/CartProduct"
import SummaryItem from '../../components/SummaryItem/SummaryItem'

export function Cart() {
  // const [cart, setCart] = useState([]);

  // const getCart = async () => {
  //   const result = await client.get("/carts/find");
  //   setCart(result.data);
  // };

  // useEffect(() => {
  //   getCart();
  // }, []);


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
          <div className={styles.bottomContainer}>
            <div className={styles.infoContainer}>
              <CartProduct/>
              <hr className={styles.hrSeparator}></hr>
              <CartProduct/>
              <hr className={styles.hrSeparator}></hr>
              <CartProduct/>
            </div>
            <div className={styles.summaryContainer}>
              <h2>Order Summary</h2>
              <SummaryItem text={"Subtotal"} value={"20"}/>
              <SummaryItem text={"Shipping Costs"} value={"5.50"}/>
              <SummaryItem text={"Shipping Discount"} value={"- 5.50"}/>
              <SummaryItem type={"total"} text={"Total"} value={"20"}/>
              <button className={styles.summaryButton}>CHECKOUT NOW</button>
            </div>
           
          </div>
          </div>
        <Footer/>
    </div>
  )
}
