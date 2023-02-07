import React from "react";
import styled from "styled-components";

const Black = () => {
  return <StyleDiv></StyleDiv>;
};

export default Black;

const StyleDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: -5;
`;
