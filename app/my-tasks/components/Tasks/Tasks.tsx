"use client";
import React, { FC, useCallback, useEffect } from "react";
import Task from "../Task/Task";
import { ITodo } from "@/app/services/interfaces/ITodo";
import styles from "./Tasks.module.scss";
import { useTodoStore } from "@/app/store/todos";
import Pagination from "@/app/components/Pagination/Pagination";
import cs from "classnames";

interface TasksProps {
  tasks: ITodo[];
}

const Tasks: FC<TasksProps> = ({ tasks }) => {
  const { saveTodos, todos, pagination, pageChange, allTodos } = useTodoStore();
  const needPagination = useCallback(
    () => allTodos?.length > pagination.limit,
    [allTodos, pagination.limit]
  );

  useEffect(() => {
    saveTodos(tasks);
  }, [tasks]);

  return (
    <div className={styles.root}>
      <div
        className={cs(
          styles.container,
          needPagination() && styles.container__pagination
        )}
      >
        {todos?.map((task) => (
          <Task
            title={task.title}
            id={task.id}
            key={task.id}
            description={task?.description}
          />
        ))}
      </div>
      {allTodos?.length === 0 && <p>No hay tareas</p>}
      {needPagination() && (
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages || 0}
          onPageChange={(page) => {
            console.log("page", page);
            pageChange(page);
          }}
        />
      )}
    </div>
  );
};

export default Tasks;
