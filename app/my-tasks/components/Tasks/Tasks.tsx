"use client";
import React, { FC, useEffect } from "react";
import Task from "../Task/Task";
import { ITodo } from "@/app/services/interfaces/ITodo";
import styles from "./Tasks.module.scss";
import { useTodoStore } from "@/app/store/todos";

interface TasksProps {
  tasks: ITodo[];
}

const Tasks: FC<TasksProps> = ({ tasks }) => {
  const { saveTodos} = useTodoStore();

  useEffect(() => {
    saveTodos(tasks);
  }, [tasks]);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <Task title={task.title} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
