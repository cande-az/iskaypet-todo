"use client";
import Button from "@/app/components/Button/Button";
import Popup from "@/app/components/Popup/Popup";
import React from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import styles from "./NewTask.module.scss";

const NewTask = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <div className={styles.button__container}>
        <Button onClick={handleOpen}>Agregar tarea</Button>
      </div>
      <Popup isOpen={isOpen} onClose={handleClose} top="27px" width="90%">
        <NewTaskForm />
      </Popup>
    </>
  );
};

export default NewTask;
