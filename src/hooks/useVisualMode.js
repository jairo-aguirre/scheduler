import { useState } from "react";

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (secondMode, replaceFlag = false) => {
    setMode(secondMode);

    if (replaceFlag) {
      history.pop()
    };

    setHistory([...history, secondMode]);
  }

  const back = () => {
    if (history.length === 1) return;
    history.pop();

    setHistory(history);
    setMode(history[history.length - 1]);
  };
  
  return {mode, transition, back};
};

export default useVisualMode;