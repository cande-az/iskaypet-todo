import React, { FC , JSX } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  type?: "primary" | "secondary";
  label?: string;
  tag?: keyof JSX.IntrinsicElements; 
}

const Title: FC<TitleProps> = ({ type = "primary", label = "Title", tag = "h1" }) => {
  return React.createElement(tag, { className: styles[type] }, label);
};

export default Title;