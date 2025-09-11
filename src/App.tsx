import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { MyHeading } from "./components/MyHeading";

const App = () => {
  return (
    <>
      <Container>
        <MyHeading>LOGO</MyHeading>
      </Container>
      <Container>
        <MyHeading>MENU</MyHeading>
      </Container>
      <Container>
        <MyHeading>FORM</MyHeading>
      </Container>
      <Container>
        <MyHeading>FOOTER</MyHeading>
      </Container>
    </>
  );
};

export default App;
