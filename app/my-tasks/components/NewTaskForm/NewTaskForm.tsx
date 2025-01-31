import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import Title from "@/app/components/Title/Title";
import React from "react";

const NewTaskForm = () => {
  return (
    <div>
      <Title label="Añadir tarea" tag="h1" />
      <form>
        <div>
          <Input label="Nombre" required placeholder="Nombre" />
          <Input label="Descripcion" required placeholder="Descripcion" />
        </div>
        <div>

        <Button type="submit" variant="secondary">Cancelar</Button>
        <Button type="submit">Guardar</Button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
