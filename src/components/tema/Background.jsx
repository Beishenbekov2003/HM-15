import React from "react";
import styled from "styled-components";

const Background = () => {
  return <StyleDiv></StyleDiv>;
};

export default Background;

const StyleDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f1e609;
  z-index: -5;
`;
