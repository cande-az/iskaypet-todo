import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className={`${styles.inputContainer} ${className || ""}`}>
      {label && (
        <label htmlFor={props.id}>
          {label}
          {props?.required && <span>*</span>}
        </label>
      )}
      <input
        {...props}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
