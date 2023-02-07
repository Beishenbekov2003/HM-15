import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

const SecondInput = () => {
  const {
    input,
    inputChangeHandler,
    addHandler,
    type,
    text,
    validatePasswordHandler,
    error,
  } = useInput("password");
  return (
    <div>
      {error === false ? <Text>Password is not valid !</Text> : null}

      {error === false ? (
        <StyledInput
          style={{ borderColor: "red" }}
          placeholder={text}
          value={input}
          type={type}
          onChange={(e) => inputChangeHandler(e.target.value)}
          onBlur={validatePasswordHandler}
        />
      ) : (
        <StyledInput
          placeholder={text}
          value={input}
          type={type}
          onChange={(e) => inputChangeHandler(e.target.value)}
          onBlur={validatePasswordHandler}
        />
      )}

      <Button onClick={addHandler}>ADD</Button>
    </div>
  );
};
export default SecondInput;

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 30px;
`;
const Text = styled.p`
  color: red;
  padding: 0;
  margin-bottom: 0;
  margin-right: 150px;
`;
const Button = styled.button`
  padding: 10px;
  color: #f1e8e8;
  font-size: 20px;
  background-color: #1eff00;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 30px;
  cursor: pointer;
`;
