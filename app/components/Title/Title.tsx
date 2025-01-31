import React from "react";
import styles from "./Title.module.scss";

const Title = ({ type = "primary", label = "Title", tag = 'h1' }) => {
  
  return <h1 className={styles[type]}>{label}</h1>;
};

export default Title;
