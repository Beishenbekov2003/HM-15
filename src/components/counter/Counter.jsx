import styled from "styled-components";
import { useCounter } from "../../hooks/useCount";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(4, 2);
  return (
    <Container>
      <StyledH2>{count}</StyledH2>
      <Contain>
        <StyledBtn onClick={increment}>Increment</StyledBtn>
        <SecontBtn onClick={decrement}>Decrement</SecontBtn>
        <ThirdBtn onClick={reset}>Reset</ThirdBtn>
      </Contain>
    </Container>
  );
};

export default Counter;

const StyledH2 = styled.h2`
  color: #ff090d;
  font-size: 50px;
`;
const Container = styled.div`
  background-color: blue;
  padding: 50px;
  border-radius: 100%;
  border: 3px solid black;
  box-shadow: 5px 5px 5px black;
`;
const StyledBtn = styled.button`
  padding: 20px 12px;
  border-radius: 20px;
  color: aliceblue;
  background-color: red;
  font-size: 20px;
  cursor: pointer;
  :hover {
    box-shadow: 5px 10px 10px white;
  }
`;
const Contain = styled.div`
  align-items: center;
  justify-content: space-between;
`;
const SecontBtn = styled.button`
  padding: 20px 12px;
  border-radius: 20px;
  color: aliceblue;
  background-color: #00ff1e;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    box-shadow: 5px 10px 10px white;
  }
`;
const ThirdBtn = styled.button`
  padding: 20px 12px;
  border-radius: 20px;
  color: aliceblue;
  background-color: #6a0945;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    box-shadow: 5px 10px 10px white;
  }
`;
