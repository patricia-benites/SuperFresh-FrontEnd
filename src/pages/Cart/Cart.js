import React from "react";
import { Announcement } from "../../components/Announcement/Announcement";
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { client } from "../../client";
import styles from "./Cart.module.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import SummaryItem from "../../components/SummaryItem/SummaryItem";
import { Link } from "react-router-dom";

export function Cart() {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  console.log(user);
  console.log("cart", cart);

  const getCart = async () => {
    const existingCart = await client.get(`/carts/find/${user._id}`);
    console.log(existingCart);
    if (existingCart.data) {
      setCart(existingCart.data);
    }
  };
  const calculateSubtotal = () => {
    if (cart.products) {
    setSubtotal(cart.products.reduce((acc, product)=>{
      return acc + (product.quantity * product.productId.price)
    },0))
    console.log("subtotal",subtotal)
  }
  }

  const changeQuantity = async (productId, value) => {
    console.log(productId, value);
    setCart((previousCart) => {
      const newCart = {
        ...previousCart,
        products: previousCart.products.map((product) => {
          if (product.productId._id === productId) {
            return {
              ...product,
              quantity: product.quantity + value,
            };
          } else {
            return product;
          }
        }),
      };
      const depopulatedCart = {
        ...newCart,
        products: newCart.products.map((product) => {
          return {
            ...product,
            productId: product.productId._id
          }
        })
      }
      console.log("depopulated",depopulatedCart);
      client.patch(`/carts/${newCart._id}`,depopulatedCart)
      // calculateSubtotal();
      return newCart;
    });
    
  };

  

  useEffect(() => {
    getCart();
  }, []);

  useEffect(()=> {
    calculateSubtotal();
  },[cart])

  
  return (
    <div className={styles.pageContainer}>
      <Announcement />
      <Navbar />
      <div className={styles.cartContainer}>
        <h2>Your Shopping Cart</h2>
        <div className={styles.topContainer}>
          <button className={styles.leftButton}>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              CONTINUE SHOPPING
            </Link>
          </button>
          <div>
            <span>Shopping Cart</span>
            <span>Save for Later</span>
          </div>
          <button className={styles.rightButton}>CHECKOUT NOW</button>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.infoContainer}>
            {cart.products &&
              cart.products.map((product) => {
                return (
                  <div key={product.productId}>
                    {product.quantity > 0 && <CartProduct
                      product={product}
                      changeQuantity={changeQuantity}
                    />}
                    <hr className={styles.hrSeparator}></hr>
                  </div>
                );
              })}
          </div>
          <div className={styles.summaryContainer}>
            <h2>Order Summary</h2>
            {cart.products && (
              <SummaryItem text={"Subtotal"} value={subtotal} />
            )}
            {cart.products && (
              <SummaryItem text={"Shipping Costs"} value={"5.50"} />
            )}
            {cart.products && (
              <SummaryItem text={"Shipping Discount"} value={"- 2.50"} />
            )}
            <SummaryItem type={"total"} text={"Total"} value={subtotal} />
            <button className={styles.summaryButton}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
