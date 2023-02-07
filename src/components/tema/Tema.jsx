import React from "react";
import styled from "styled-components";
import { useTema } from "../../hooks/useTema";
import Background from "./Background";
import Black from "./Black";

const Tema = () => {
  const { changeTema, tema } = useTema();
  return (
    <div>
      <Button onClick={changeTema}>{tema ? "Black" : "Yellow"}</Button>
      {tema ? <Background /> : <Black />}
    </div>
  );
};

export default Tema;

const Button = styled.button`
  padding: 20px;
  background-color: red;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 30px;
  :active {
    background-color: blue;
    color: red;
  }
`;
