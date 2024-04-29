import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { arr } from "./data/data";

import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { keys, enter, backspace } from "./functions/functions";

function App() {
  const [i1, setI1] = useState([[], [], [], [], [], []]);
  const [count, setCount] = useState(0);
  const [cor, setCor] = useState([[], [], [], [], [], []]);
  const [won, setWon] = useState(false);
  const [lose, setLose] = useState(false);
  const word = "prune";

  const handleInput = (e) => {
    let b = e.key.toUpperCase();
    keys(b, i1, setI1, count);
    enter(b, i1, word, count, setCor, won, setWon, setCount, setLose, lose);
    backspace(b, won, setI1, count, lose);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleInput);
    return () => {
      window.removeEventListener("keydown", handleInput);
    };
  }, [handleInput]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="h-screen overflow-hidden bg-slate-900 w-full">
        <div className="h-[10%] text-white flex justify-center items-center border-b-[1px] text-2xl font-bold border-white">
          <div>Wordle</div>
        </div>
        <div className="w-full flex flex-col items-center gap-2 h-[50%] mt-5">
          <Board i1={i1} i={0} cor={cor} />
          <Board i1={i1} i={1} cor={cor} />
          <Board i1={i1} i={2} cor={cor} />
          <Board i1={i1} i={3} cor={cor} />
          <Board i1={i1} i={4} cor={cor} />
          <Board i1={i1} i={5} cor={cor} />
        </div>
        <div className="w-full flex flex-col items-center justify-center h-[40%] gap-2">
          <Keyboard
            i1={i1}
            setI1={setI1}
            count={count}
            setCount={setCount}
            won={won}
            setCor={setCor}
            setWon={setWon}
            word={word}
            setLose={setLose}
            lose={lose}
          />
        </div>
      </div>
    </>
  );
}

export default App;
