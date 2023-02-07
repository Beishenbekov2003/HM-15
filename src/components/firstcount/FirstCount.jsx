import React from "react";
import styled from "styled-components";
import { useAutoCount } from "../../hooks/useAutoCount";

export const FirstCount = () => {
  const { counter } = useAutoCount(true);
  return (
    <Block>
      <StyledCount>{counter}</StyledCount>
    </Block>
  );
};

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
