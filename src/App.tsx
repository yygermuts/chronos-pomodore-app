import "./styles/theme.css";
import "./styles/global.css";
import { ContainerComponent } from "./components/ContainerComponent";

const App = () => {
  return (
    <>
      <ContainerComponent>LOGO</ContainerComponent>
      <ContainerComponent>MENU</ContainerComponent>
      <ContainerComponent>FORM</ContainerComponent>
      <ContainerComponent>FOOTER</ContainerComponent>
    </>
  );
};

export default App;
