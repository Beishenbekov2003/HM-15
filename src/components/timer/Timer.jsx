import styled from "styled-components";
import { useTimer } from "../../hooks/useTimer";

const Timer = () => {
  const {
    startHandler,
    stopHandler,
    resetHandler,
    iscounting,
    input,
    changeInputHandler,
    addHandler,
    timeLeft,
  } = useTimer();
  return (
    <Container>
      <div>
        <Input
          type="number"
          value={input}
          onChange={(e) => changeInputHandler(e.target.value)}
        />
        <Button onClick={addHandler}>ADD</Button>
      </div>
      <Block>
        <StyledSpan>{timeLeft || "00"}</StyledSpan>
      </Block>

      {iscounting ? (
        <StyledBtn onClick={stopHandler}>Stop</StyledBtn>
      ) : (
        <SecondBtn onClick={startHandler}>Start</SecondBtn>
      )}

      <ResetBtn onClick={resetHandler}>Reset</ResetBtn>
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  margin-top: 100px;
  background-color: green;
  padding: 40px;
  border-radius: 100%;
  box-shadow: 15px 10px 15px;
`;

const StyledBtn = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  color: white;
  background-color: #da2846;
  border-radius: 20px;
  cursor: pointer;
`;

const SecondBtn = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  color: white;
  background-color: #402bc4;
  border-radius: 20px;
  cursor: pointer;
`;
const ResetBtn = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  color: white;
  background-color: #800565;
  border-radius: 20px;
  margin-left: 50px;
  cursor: pointer;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-bottom: 30px;
`;
const StyledSpan = styled.span`
  font-size: 30px;
  color: black;
  font-weight: 900;
`;

const Input = styled.input`
  width: 100px;
  height: 30px;
  margin-left: 30px;
`;

const Button = styled.button`
  padding: 5px;
  border-radius: 20px;
  color: azure;
  background-color: red;
  font-size: 15px;
  margin-left: 20px;
`;
