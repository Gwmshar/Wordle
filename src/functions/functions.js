import toast from "react-hot-toast";
import { arr } from "../data/data";
export function keys(b, i1, setI1, count) {
  if (b >= "A" && b <= "Z" && b.length == 1 && i1[count].length <= 4) {
    setI1((a) => {
      let prev = [...a];
      prev[count] = [...prev[count], b];
      return prev;
    });
  }
}

export function enter(
  b,
  i1,
  word,
  count,
  setCor,
  won,
  setWon,
  setCount,
  setLose,
  lose
) {
  if (b == "ENTER" && i1[count].length > 4 && !won && !lose) {
    let str = "";
    str +=
      i1[count][0] + i1[count][1] + i1[count][2] + i1[count][3] + i1[count][4];
    str = str.toLowerCase();
    if (arr.includes(str)) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] == word[i]) {
          setCor((a) => {
            let prev = [...a];
            prev[count] = [...prev[count], 0];
            return prev;
          });
        } else if (word.includes(str[i])) {
          setCor((a) => {
            let prev = [...a];
            prev[count] = [...prev[count], 1];
            return prev;
          });
        } else {
          setCor((a) => {
            let prev = [...a];
            prev[count] = [...prev[count], 2];
            return prev;
          });
        }
      }
      if (str == word) {
        toast.success("You Won");
        setWon(true);
      } else if (str != word && count == 5) {
        toast.error("You Lose");
        setLose(true);
      } else {
        if (count < 5) {
          setCount((a) => ++a);
        }
      }
    } else {
      toast.error("Words is not in the list");
    }
  } else if (b == "ENTER" && i1[count].length < 5) {
    toast.error("Words is not enough");
  }
}

export function backspace(b, won, setI1, count, lose) {
  if (b == "BACKSPACE" && !won && !lose) {
    setI1((a) => {
      let m = [...a];
      m[count] = m[count].slice(0, -1);
      return m;
    });
  }
}
