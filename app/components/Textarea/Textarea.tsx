import React from "react";
import styles from "./Textarea.module.scss";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, className, ...props }) => {
  return (
    <div className={`${styles.textareaContainer} ${className || ""}`}>
      {label && (
        <label htmlFor={props.id}>
          {label}
          {props?.required && <span>*</span>}
        </label>
      )}
      <textarea
        {...props}
        className={`${styles.textarea} ${error ? styles.error : ""}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Textarea;