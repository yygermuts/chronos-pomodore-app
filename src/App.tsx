import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

const App = () => {
  return (
    <div>
      <Heading>
        Hello World
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero neque
        natus earum a. Iusto minima architecto eos, velit itaque incidunt
        necessitatibus molestias error qui odio repellat quisquam aperiam non
        nobis?
      </p>
    </div>
  );
};

export default App;
