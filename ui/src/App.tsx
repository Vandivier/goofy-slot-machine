import "./App.css";

import { CreditCounter } from "./features/credit-counter/CreditCounter";
import { SlotMachine } from "./features/slot-machine/SlotMachine";

const App = () => {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: "url(slot-machine.png)",
        }}
      >
        <h1
          style={{
            color: "white",
            textShadow:
              "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
            width: "50%",
          }}
        >
          Pull the lever!
        </h1>
      </header>

      <SlotMachine />
      <CreditCounter />
    </div>
  );
};

export default App;
