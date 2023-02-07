import { useEffect, useState } from "react";

export const useTimer = () => {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState();
  const [iscounting, setCounting] = useState(false);

  const result = input * 60;
  const changeInputHandler = (value) => {
    setInput(value);
  };
  const addHandler = () => {
    setTimeLeft(result);
    setInput("");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      iscounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [iscounting]);

  const startHandler = () => {
    setCounting(true);
  };
  const stopHandler = () => {
    setCounting(false);
  };
  const resetHandler = () => {
    setCounting(false);
    setTimeLeft(0);
  };

  return {
    timeLeft,
    iscounting,
    startHandler,
    resetHandler,
    stopHandler,
    input,
    changeInputHandler,
    addHandler,
  };
};
