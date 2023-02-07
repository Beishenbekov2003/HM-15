import { useState } from "react";

export const useInput = (type) => {
  const [error, setError] = useState();
  let initialState;
  let text;
  if (type === "email") {
    initialState = "";
    text = "Write your email";
  }
  if (type === "password") {
    initialState = "";
    text = "Write your password";
  }
  if (type === "text") {
    initialState = "";
    text = "Write text";
  }
  const [input, setInput] = useState(initialState);

  const inputChangeHandler = (value) => {
    setInput(value);
  };
  const validateEmailHandler = () => {
    setError(input.includes("@"));
  };
  const validatePasswordHandler = () => {
    setError(input.trim().length > 12);
  };
  const validateTextHandler = () => {
    setError(input.trim().length > 8);
  };
  const addHandler = () => {
    setInput("");
  };

  return {
    input,
    inputChangeHandler,
    addHandler,
    initialState,
    text,
    validateEmailHandler,
    error,
    validatePasswordHandler,
    validateTextHandler,
  };
};
