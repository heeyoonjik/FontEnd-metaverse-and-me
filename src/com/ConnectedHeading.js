import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConnectedHeading = ({ heading }) => {
  return (
    <div>
      <BackLink to="/Connected">
        <Back src="/img/back.png" alt="Tlqkf" />
      </BackLink>
      <IntroductionHeading>{heading}</IntroductionHeading>
    </div>
  );
};
const Back = styled.img`
  width: 1.8vw;
  @media screen and (max-width: 770px) {
    width: 6.5vw;
  }
`;

const BackLink = styled(Link)`
  position: absolute;
  z-index: 99999992;
  top: 2.2vw;
  left: 3vw;
  @media screen and (max-width: 770px) {
    top: 9vw;
    left: 8.5vw;
  }
`;

const IntroductionHeading = styled.h1`
  font-family: "BaunkSans";
  font-size: 4.427vw;
  padding-top: 7.2vw;
  margin-left: 4vw;
  padding-bottom: 2vw;
  @media screen and (max-width: 770px) {
    font-size: 6.5vw;
    padding-top: 25vw;
    padding-bottom: 9vw;
    margin-left: 9vw;
  }
`;
