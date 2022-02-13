import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import { CreditCounter } from "./features/credit-counter/CreditCounter";
import {
  refreshBingBongMode,
  selectLeverPullAudio,
} from "./features/credit-counter/creditCounterSlice";
import { SlotMachine } from "./features/slot-machine/SlotMachine";

const App = () => {
  const dispatch = useAppDispatch();
  const leverPullAudio = useAppSelector(selectLeverPullAudio);

  const handleClickExclamation = () => {
    dispatch(refreshBingBongMode());
    // play once just to show it's activated, then randomize audio
    new Audio(leverPullAudio).play();
    dispatch(refreshBingBongMode());
  };

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
          Pull the lever
          <span style={{ cursor: "pointer" }} onClick={handleClickExclamation}>
            !
          </span>
        </h1>
      </header>

      <SlotMachine />
      <CreditCounter />
    </div>
  );
};

export default App;
