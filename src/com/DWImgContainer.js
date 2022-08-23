import React from "react";
import styled from "styled-components";

export const DWImgContainer = ({ srcValue, setTestValue }) => {
  const TestF = () => {
    setTestValue(srcValue);
  };

  return (
    <TWImgBox>
      <TWIMG src={srcValue} onClick={TestF} />
    </TWImgBox>
  );
};

const TWImgBox = styled.div`
  width: 4.688vw;
  height: 4.688vw;
  margin-right: 1.146vw;
  background-color: black;
  cursor: pointer;

  @media screen and (max-width: 770px) {
    width: 16.41vw;
    height: 16.41vw;
  }
`;
const TWIMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
