import MainContainer from "../components/MainContainer/MainContainer";
import Title from "../components/Title/Title";
import { getTodos } from "../services/actions/todos";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

const getData = async () => {
  const todos = await getTodos();
  return todos;
};

export default async function Page() {
  const todos = await getData();

  return (
    <MainContainer>
      <Title label="Mis tareas" />
      <Tasks tasks={todos} />
      <NewTask />
    </MainContainer>
  );
}
