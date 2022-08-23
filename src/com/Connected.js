import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Connected = () => {
  return (
    <Inner>
      <IntroductionHeading>CONNECTED</IntroductionHeading>
      <ConnectedNav>
        <NavIllustration>
          <Heading>ILLUSTRATION</Heading>
          <P>
            가상세계 속 아바타들의 매력과 <br /> 서로간의 상호작용을 간접
            경험합니다
          </P>
          <GoLink to="/Connected/ILLUSTRATION/burpee">
            <GoIcon src="img/go.png" />
          </GoLink>
        </NavIllustration>
        <NavInstallation>
          <Heading>INSTALLATION</Heading>
          <P>
            메타버스 속 경험을 다양한 관점으로 시각화하여 <br />
            타인의 내면세계에 한발을 내딛습니다
          </P>
          <GoLink to="/Connected/INSTALLATION/DoiBonnie">
            <GoIcon src="img/go.png" />
          </GoLink>
        </NavInstallation>
        <NavMotionGraphic>
          <Heading>MOTION GRAPHIC</Heading>
          <P>
            8명의 아이덴티티들이 자신의 고유한 스타일로 <br /> 메타버스 세상을
            마음껏 설계합니다
          </P>
          <GoLink to="/Connected/MotionGraphic/Jjo">
            <GoIcon src="img/go.png" />
          </GoLink>
        </NavMotionGraphic>
      </ConnectedNav>
      {/* <BgImg src="img/real.png" /> */}
    </Inner>
  );
};

export default Connected;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
  @media screen and (max-width: 770px) {
  }
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
    padding-top: 23vw;
    padding-bottom: 9vw;
    margin-left: 8vw;
  }
`;

const ConnectedNav = styled.nav`
  background-image: url("http://localhost:3000/img/real.png");
  background-size: cover;
  width: 100.3vw;
  height: 42vw;
  position: absolute;
  right: 0.1vw;
  top: 13vw;
  z-index: -10;
  display: flex;
  z-index: 10292;
  padding-top: 0.1vw;
  @media screen and (max-width: 770px) {
    background-size: cover;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 22vw;
    background-image: url("http://localhost:3000/img/mobileframe.png");
  }
`;

const NavIllustration = styled.section`
  width: 33.9vw;
  height: 42vw;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1999;
  :hover {
    background-color: #774bff;
  }
  @media screen and (max-width: 770px) {
    width: 100vw;
    height: 42vw;
    padding-top: 9vw;
    padding-bottom: 9vw;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;

const NavInstallation = styled.section`
  width: 33.8vw;
  height: 42vw;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.2vw;
  z-index: 2000;
  :hover {
    background-color: #774bff;
  }
  @media screen and (max-width: 770px) {
    padding-top: 9vw;
    padding-bottom: 9vw;
    width: 100vw;
    height: 42vw;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;

const NavMotionGraphic = styled.section`
  width: 33.3vw;
  height: 42vw;
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.2vw;
  z-index: 2001;
  :hover {
    background-color: #774bff;
  }
  @media screen and (max-width: 770px) {
    padding-top: 9vw;
    padding-bottom: 9vw;
    width: 100vw;
    height: 42vw;
    border-top: 1px solid white;
  }
`;

// const BgImg = styled.img`
//   display: none;
// `;

const Heading = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 1.8vw;
  padding-bottom: 2.5vw;
  padding-top: 1.4vw;
  @media screen and (max-width: 770px) {
    font-size: 6.5vw;
  }
`;

const P = styled.p`
  font-family: SDGothic;
  text-align: center;
  font-size: 1.3vw;
  padding-bottom: 2vw;
  @media screen and (max-width: 770px) {
    font-size: 3.5vw;
    line-height: 6vw;
  }
`;

const GoIcon = styled.img`
  height: 5.5vw;
  @media screen and (max-width: 770px) {
    height: 12vw;
  }
`;

const GoLink = styled(Link)`
  padding-top: 2vw;
`;
