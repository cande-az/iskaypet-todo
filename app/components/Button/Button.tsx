import React from "react";
import styles from "./Button.module.scss";
import cs from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  icon?: React.ReactNode;
  fit?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  icon,
  className,
  children,
  fit,
  ...props
}) => {
  return (
    <button
      className={cs(
        styles.button,
        styles[variant],
        styles[size],
        className,
        fit && "fit-content"
      )}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
