import React from "react";
import styled from "styled-components";
import { useAutoCount } from "../../hooks/useAutoCount";

const SecondCount = () => {
  const { counter } = useAutoCount(false);
  return (
    <Block>
      <StyledCount>{counter}</StyledCount>
    </Block>
  );
};

export default SecondCount;

const StyledCount = styled.h2`
  color: azure;
  font-size: 40px;
`;
const Block = styled.div`
  padding: 30px;
  margin-top: 40px;
  border-radius: 50px;
  background: linear-gradient(red, blue);
`;
