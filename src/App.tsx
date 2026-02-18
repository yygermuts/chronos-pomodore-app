import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";

const App = () => {
  return <Home />;
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
