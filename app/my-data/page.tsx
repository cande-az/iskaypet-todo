import MainContainer from "../components/MainContainer/MainContainer";
import Title from "../components/Title/Title";
import MyDataForm from "./components/MyDataForm/MyDataForm";

export default function Page() {
  return (
    <MainContainer>
      <Title label="Mis datos" />
      <MyDataForm />
    </MainContainer>
  );
}
