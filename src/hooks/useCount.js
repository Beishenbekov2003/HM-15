import { useState } from "react";
export const useCounter = (a, b) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + a);
  };
  const decrement = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - b;
      }
      return prev;
    });
  };
  const reset = () => {
    setCount(0);
  };
  return {
    count,
    reset,
    increment,
    decrement,
  };
};
