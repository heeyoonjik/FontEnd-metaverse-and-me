import React from "react";
import styled from "styled-components";
import ILLNAV from "./illustration/ILLNAV";

const ILLUSTRATION = () => {
  return (
    <Inner>
      <IntroductionHeading>ILLUSTRATION</IntroductionHeading>
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <BgImg src="img/buddy.png" />
    </Inner>
  );
};

export default ILLUSTRATION;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
`;

const IntroductionHeading = styled.h1`
  font-family: "BaunkSans";
  font-size: 4.5vw;
  padding-top: 8vw;
  margin-left: 2.5vw;
  padding-bottom: 2vw;
  z-index: 9999;
  @media screen and (max-width: 770px) {
    font-size: 7vw;
    padding-top: 1vw;
    padding-bottom: 9vw;
    margin-left: 7vw;
  }
`;

const ConnectedNav = styled.nav`
  background-image: url("http://localhost:3000/img/buddy.png");
  background-size: cover;
  width: 100.3vw;
  height: 42vw;
  position: absolute;

  top: 13vw;
  z-index: -10;
  display: flex;
  z-index: 10292;
`;

const BgImg = styled.img`
  display: none;
`;
