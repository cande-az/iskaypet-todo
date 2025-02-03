import Icon from "@/app/components/Icon/Icon";
import React, { FC } from "react";
import styles from "./Task.module.scss";
import Title from "@/app/components/Title/Title";
import { useTodoStore } from "@/app/store/todos";

interface TaskProps {
  title: string;
  description?: string;
  id: string;
}

const Task: FC<TaskProps> = ({
  title,
  id,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna.",
}) => {
  const { deleteTodo } = useTodoStore();
  return (
    <div className={styles.root}>
      <div className={styles.text__container}>
        <Title label={title} tag="h3" type="secondary" />
        <p>{description}</p>
      </div>
      <button className={styles.icon__button} onClick={() => deleteTodo(id)}>
        <Icon type="trash" color="#B3B3B3" />
      </button>
    </div>
  );
};

export default Task;
