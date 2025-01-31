import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import React from "react";
import styles from "./MyDataForm.module.scss";

const MyDataForm = () => {
  return (
    <div className={styles.root}>
      <form>
        <div className={styles.form__container}>

        <Input label="Nombre" required placeholder="Nombre"/>
        <Input label="Email" required placeholder="Email"/>
        <Input label="Teléfono" required placeholder="Teléfono"/>
        </div>
        <Button type="submit">Guardar</Button>
      </form>
    </div>
  );
};

export default MyDataForm;
