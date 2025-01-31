import React, { FC } from "react";
import styles from "./MainContainer.module.scss";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default MainContainer;
