import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import Title from "@/app/components/Title/Title";
import React, { FC } from "react";
import styles from "./NewTaskForm.module.scss";
import Textarea from "@/app/components/Textarea/Textarea";
import { useTodoStore } from "@/app/store/todos";
import { validate } from "./validation";

interface NewTaskFormProps {
  closePopup: () => void;
}

const NewTaskForm: FC<NewTaskFormProps> = ({ closePopup }) => {
  const { saveNewTodo } = useTodoStore();
  const [form, setForm] = React.useState({ name: "", description: "" });
  const [formErrors, setFormErrors] = React.useState<null | Record<
    string,
    string
  >>();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation new task
    if (validate(form)) {
      setFormErrors(validate(form));
    } else {
      saveNewTodo({
        title: form.name,
        userId: "sampleUser",
        description: form.description,
        completed: false,
        id: Math.random().toString(36).substr(2, 9),
      });
      closePopup();
    }
  };

  return (
    <div>
      <Title label="Añadir tarea" tag="h1" />
      <form onSubmit={handleSubmit}>
        <div className={styles.form__container}>
          <Input
            label="Nombre"
            placeholder="Nombre"
            value={form.name}
            name="name"
            onChange={handleChange}
            error={formErrors?.name}
          />
          <Textarea
            label="Descripción"
            placeholder="Descripción"
            value={form.description}
            name="description"
            onChange={handleChange}
            error={formErrors?.description}
          />
        </div>
        <div className={styles.buttons__container}>
          <Button type="submit" variant="secondary">
            Cancelar
          </Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
