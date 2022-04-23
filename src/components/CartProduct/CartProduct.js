import React from "react";
import styles from "./CartProduct.module.css";
import { GrFormAdd, GrFormSubtract} from "react-icons/gr";

export default function CartProduct(props) {
  return (
    <div className={styles.cartProductContainer}>
      <div className={styles.productDetail}>
        <img
          src="https://cdn.potatopro.com/cdn/ff/f9ZHyiImXygGg6tcrN647LsUuGoeMdaHY-6iJaKEZtI/1633361359/public/styles/1200_wide/public/field/image/russian-potato-market-prices-are-growing-every-day-1200.jpg?itok=HIIxz33e"
          alt="https://cdn.potatopro.com/cdn/ff/f9ZHyiImXygGg6tcrN647LsUuGoeMdaHY-6iJaKEZtI/1633361359/public/styles/1200_wide/public/field/image/russian-potato-market-prices-are-growing-every-day-1200.jpg?itok=HIIxz33e"
          style={{ width: "150px" }}
        ></img>
        <span>
          <b>Product:</b>Title
        </span>
      </div>
      <div className={styles.priceDetail}>
        <div className={styles.productAmountContainer}>
          <div><GrFormAdd/></div>
          <div>2</div>
          <div><GrFormSubtract/></div>
        </div>
        <div className={styles.productPrice}>$ 20</div>
      </div>
    </div>
  );
}
