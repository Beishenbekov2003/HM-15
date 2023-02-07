import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

const ThirdInput = () => {
  const {
    input,
    inputChangeHandler,
    type,
    addHandler,
    text,
    error,
    validateTextHandler,
  } = useInput("text");
  return (
    <div>
      {error === false ? <Text>Text should not be short !</Text> : null}
      {error === false ? (
        <StyledInput
          placeholder={text}
          style={{ borderColor: "red" }}
          value={input}
          type={type}
          onChange={(e) => inputChangeHandler(e.target.value)}
          onBlur={validateTextHandler}
        />
      ) : (
        <StyledInput
          placeholder={text}
          value={input}
          type={type}
          onChange={(e) => inputChangeHandler(e.target.value)}
          onBlur={validateTextHandler}
        />
      )}
      <Button onClick={addHandler}>ADD</Button>
    </div>
  );
};

export default ThirdInput;

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px;
  color: #f1e8e8;
  font-size: 20px;
  background-color: #ff0000;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 30px;
  cursor: pointer;
`;
const Text = styled.p`
  color: red;
  padding: 0;
  margin-bottom: 0;
  margin-right: 120px;
`;
