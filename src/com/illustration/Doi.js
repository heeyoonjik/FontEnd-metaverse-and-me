import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import ConnectPop from "./ConnectPop";
import { ConnectedHeading } from "../ConnectedHeading";
const Doi = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/doi.png"
          introheading="<pew- pew>"
          introheadingson="10 X 15cm, 아크릴 스탠드, 2022"
          introcontent=" 제한 없는 공간 속에서 자유롭게 생활하는 도이 .
          이 자유를 즐기며 더욱 성장한다 ."
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="도이 박도은"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Doi;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
  overflow-x: hidden;
`;

const ConnectedNav = styled.nav`
  background-image: url("/img/buddy.png");
  background-size: cover;
  width: 100.3vw;
  height: 42vw;
  position: absolute;

  top: 13vw;
  z-index: -10;
  display: flex;
  z-index: 10292;
  @media screen and (max-width: 770px) {
    background-image: url("/img/mobileframe.png");
    width: 100vw;
    height: 209vw;
    top: 70vw;
  }
`;

const PopUpBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
