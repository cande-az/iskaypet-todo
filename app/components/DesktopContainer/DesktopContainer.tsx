import React, { FC } from "react";
import styles from "./DesktopContainer.module.scss";

interface DesktopContainerProps {
  children: React.ReactNode;
}

const DesktopContainer: FC<DesktopContainerProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__mobile}>{children}</div>
    </div>
  );
};

export default DesktopContainer;
