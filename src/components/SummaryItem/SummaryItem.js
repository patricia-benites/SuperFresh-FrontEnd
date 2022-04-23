import React from "react";
import styles from "./SummaryItem.module.css"

export default function SummaryItem({type, text, value}) {
  return (
    <div className={styles.summaryItem}>
      <span className={type ? styles.summaryTotal : styles.summaryItemDesc}>{text}</span>
      <span className={type ? styles.summaryTotal : styles.summaryItemPrice}>{`$ ${value}`}</span>
    </div>
  );
}
