import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Countdown } from "./components/Countdown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <form className="form" action="">
          <DefaultInput
            labelText="Task"
            abc={123}
            id="string"
            type=""
            placeholder="Digite o nome da sua tarefa"
            // disabled
            // defaultValue="Valor preenchido"
          />
          <DefaultInput
            labelText="Task"
            abc={123}
            id="string"
            type=""
            placeholder="Digite o nome da sua tarefa"
          />

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
            {/* <DefaultButton icon={<StopCircleIcon />} color="red" /> */}
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default App;

// Anotações:

// Tudo que o React não controla diretamente durante a renderização
// é tratado como efeito colateral

// quero que todos os componentes que usam a variavel numero
// saibam das mudanças do seu valor

// sempre que usar useState
// não uso sinal de atribuição diretamente

// const [numero, setNumero] = useState(() => {
//   console.log("lazy initialization");
//   return 0;
// });

// const [numero, setNumero] = useState(0);

// // prevState é o valor anterior da variavel
// // no caso o 0 inicial de useState
// const handleClick = () => {
//   // setNumero((prevState) => prevState + 1);
//   setNumero(numero + 1);
// };
