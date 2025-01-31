import React from "react";
import Icon from "../Icon/Icon";
import AppLogo from "../AppLogo/AppLogo";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const cartItems = 4;
  return (
    <div className={styles.root}>
      <Icon type="menu" />
      <Icon type="search" />
      <AppLogo />
      <Icon type="login" />
      <div className={styles.cart}>
        <Icon type="cart" />
        <div className={styles.cart__counter}>
          <span>{cartItems}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
