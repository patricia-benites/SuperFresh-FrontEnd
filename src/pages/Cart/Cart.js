import React from 'react'
import { Announcement } from '../../components/Announcement/Announcement'
import { Footer } from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { AuthContext } from "../../context/context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { client } from "../../client";
import styles from "./Cart.module.css"
import CartProduct from "../../components/CartProduct/CartProduct"
import SummaryItem from '../../components/SummaryItem/SummaryItem'
import { Link } from "react-router-dom";

export function Cart() {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  console.log(user)
  console.log("cart", cart)

  const getCart = async () => {
    const existingCart = await client.get(`/carts/find/${user._id}`);
    console.log(existingCart)
    if (existingCart.data) {
      setCart(existingCart.data);
    }
    
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
            <button className={styles.leftButton}><Link to="/home" style={{ textDecoration: 'none', color: "black" }}>CONTINUE SHOPPING</Link></button>
            <div>
              <span>Shopping Cart</span>
              <span>Save for Later</span>
            </div>
            <button className={styles.rightButton}>CHECKOUT NOW</button>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.infoContainer}>
            
            {cart.products && cart.products.map((product) => {
              return (
                <div key={product.productId}>
                <CartProduct props={product} />
                <hr className={styles.hrSeparator}></hr></div>)
            })}
            </div>
            <div className={styles.summaryContainer}>
              <h2>Order Summary</h2>
              {cart.products && <SummaryItem text={"Subtotal"} value={"20"}/>}
              {cart.products &&<SummaryItem text={"Shipping Costs"} value={"5.50"}/>}
              {cart.products && <SummaryItem text={"Shipping Discount"} value={"- 5.50"}/>}
              <SummaryItem type={"total"} text={"Total"} value={"20"}/>
              <button className={styles.summaryButton}>CHECKOUT NOW</button>
            </div>
           
          </div>
          </div>
        <Footer/>
    </div>
  )
}
