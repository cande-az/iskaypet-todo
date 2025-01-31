import Link from "next/link";
import React, { FC } from "react";
import styles from "./Tile.module.scss";
import cs from "classnames";

interface TileProps {
  title: string;
  url: string;
  isActive?: boolean;
}

const Tile: FC<TileProps> = ({ title, url, isActive }) => {
  return (
    <li className={cs(styles.root, isActive && styles.root__active)}>
      <Link href={url}>{title}</Link>
      {isActive && <div className={styles.tile__active} />}
    </li>
  );
};

export default Tile;
