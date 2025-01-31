"use client";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./Popup.module.scss";
import Icon from "../Icon/Icon";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  top?: CSSStyleDeclaration["top"];
  left?: CSSStyleDeclaration["left"];
  right?: CSSStyleDeclaration["right"];
  bottom?: CSSStyleDeclaration["bottom"];
  width?: CSSStyleDeclaration["width"];
}

const Popup: FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  width = "80%",
  ...positions
}) => {
  if (!isOpen) return null;

  const style: React.CSSProperties = {
    ...Object.fromEntries(
      Object.entries(positions).filter(([undefined, value]) => value !== undefined)
    ),
  };

  style.transform = `translate(${
    positions.left || positions.right ? "0" : "-50%"
  }, ${positions.top || positions.bottom ? "0" : "-50%"})`;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popup}
        style={{ ...style, width }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <Icon type="close-icon" />
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
