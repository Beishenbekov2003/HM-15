import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import SecondInput from "./SecondInput";
import ThirdInput from "./ThirdInput";

const Input = () => {
  const {
    input,
    inputChangeHandler,
    addHandler,
    type,
    text,
    validateEmailHandler,
    error,
  } = useInput("email");
  return (
    <Container>
      <div>
        {error === false ? <Text>Email is not valid !</Text> : null}
        {error === false ? (
          <StyledInput
            style={{ borderColor: "red" }}
            value={input}
            type={type}
            placeholder={text}
            onChange={(e) => inputChangeHandler(e.target.value)}
            onBlur={validateEmailHandler}
          />
        ) : (
          <StyledInput
            value={input}
            type={type}
            placeholder={text}
            onChange={(e) => inputChangeHandler(e.target.value)}
            onBlur={validateEmailHandler}
          />
        )}

        <Button onClick={addHandler}>Add</Button>
      </div>
      <SecondInput />
      <ThirdInput />
    </Container>
  );
};

export default Input;
const Text = styled.p`
  color: red;
  padding: 0;
  margin-bottom: 0;
  margin-right: 150px;
`;
const Container = styled.div`
  margin-top: 100px;
  padding: 30px;
  background-color: #fff;
  border-radius: 100%;
  border: 5px solid black;
  box-shadow: 5px 5px 5px black;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  color: #f1e8e8;
  font-size: 20px;
  background-color: blue;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 30px;
  cursor: pointer;
`;
