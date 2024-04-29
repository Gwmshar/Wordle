import React from "react";
import { keys, enter, backspace } from "../functions/functions";
export default function Keyboard({
  i1,
  setI1,
  count,
  setCount,
  won,
  setWon,
  setCor,
  word,
  setLose,
  lose,
}) {
  const handleButton = (b) => {
    keys(b, i1, setI1, count);
    enter(b, i1, word, count, setCor, won, setWon, setCount, setLose, lose);
    backspace(b, won, setI1, count, lose);
  };
  return (
    <>
      <div className="flex gap-2">
        <button onClick={() => handleButton("Q")}>Q</button>
        <button onClick={() => handleButton("W")}>W</button>
        <button onClick={() => handleButton("E")}>E</button>
        <button onClick={() => handleButton("R")}>R</button>
        <button onClick={() => handleButton("T")}>T</button>
        <button onClick={() => handleButton("Y")}>Y</button>
        <button onClick={() => handleButton("U")}>U</button>
        <button onClick={() => handleButton("I")}>I</button>
        <button onClick={() => handleButton("O")}>O</button>
        <button onClick={() => handleButton("P")}>P</button>
      </div>
      <div className="flex gap-2">
        <button onClick={() => handleButton("A")}>A</button>
        <button onClick={() => handleButton("S")}>S</button>
        <button onClick={() => handleButton("D")}>D</button>
        <button onClick={() => handleButton("F")}>F</button>
        <button onClick={() => handleButton("G")}>G</button>
        <button onClick={() => handleButton("H")}>H</button>
        <button onClick={() => handleButton("J")}>J</button>
        <button onClick={() => handleButton("K")}>K</button>
        <button onClick={() => handleButton("L")}>L</button>
      </div>
      <div className="flex gap-2">
        <button
          className="w-14 md:w-16 text-sm"
          onClick={() => handleButton("ENTER")}
        >
          ENTER
        </button>
        <button onClick={() => handleButton("Z")}>Z</button>
        <button onClick={() => handleButton("X")}>X</button>
        <button onClick={() => handleButton("C")}>C</button>
        <button onClick={() => handleButton("V")}>V</button>
        <button onClick={() => handleButton("B")}>B</button>
        <button onClick={() => handleButton("N")}>N</button>
        <button onClick={() => handleButton("M")}>M</button>
        <button
          className="w-14 md:w-16"
          onClick={() => handleButton("BACKSPACE")}
        >
          ❌
        </button>
      </div>
    </>
  );
}
