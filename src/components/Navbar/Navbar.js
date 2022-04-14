import React from "react";
import styles from "./Navbar.module.css";
import { Search } from "@material-ui/icons";
import {Badge} from '@material-ui/material/Badge';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>left</div>
      <div className={styles.searchContainer}>
      {<Search></Search>}
      </div>
      <div className={styles.rightContainer}>
      {<Badge badgeContent={4} color="primary"></Badge>}
      right</div>
    </div>
  );
}
