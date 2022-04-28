import React from "react";
import styles from "./CartProduct.module.css";
import { GrFormAdd, GrFormSubtract} from "react-icons/gr";
import { useState } from "react/cjs/react.production.min";

export default function CartProduct({product, changeQuantity}) {
  


  console.log(product)
  return (
    <div className={styles.cartProductContainer}>
      <div className={styles.productDetail}>
        <img
          src={product.productId.image}
          alt={product.productId.image}
          style={{ width: "150px" }}
        ></img>
        <span>
          <b>Product: {product.productId.title}</b>
        </span>
      </div>
      <div className={styles.priceDetail}>
        <div className={styles.productAmountContainer}>
          <button onClick={()=>{changeQuantity(product.productId._id, 1)}}><GrFormAdd /></button>
          <div>{product.quantity}</div>
          <button onClick={()=>{changeQuantity(product.productId._id, -1)}}><GrFormSubtract/></button>
        </div>
        <div className={styles.productPrice}>{`$ ${product.productId.price}`}</div>
      </div>
    </div>
  );
}
