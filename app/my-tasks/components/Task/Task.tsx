import Icon from "@/app/components/Icon/Icon";
import React, { FC } from "react";
import styles from "./Task.module.scss";
import Title from "@/app/components/Title/Title";

interface TaskProps {
  title: string;
  description?: string;
}

const Task: FC<TaskProps> = ({
  title,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna.",
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.text__container}>
        <Title label={title} tag="h3" type="secondary" />
        <p>{description}</p>
      </div>
      <button className={styles.icon__button}>
        <Icon type="trash" color="#B3B3B3" />
      </button>
    </div>
  );
};

export default Task;
