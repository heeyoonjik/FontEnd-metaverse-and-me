import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";

import ConnectPop from "./ConnectPop";
import { ConnectedHeading } from "../ConnectedHeading";

const Burpee = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV />
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/burpee.png"
          introheading="<모험>"
          introheadingson="10 X 15cm, 아크릴 스탠드, 2022"
          introcontent="메타버스라는 가상 세계에서는 어디든 자유롭게 이동할 수 있다. 평소에는 쉽게 가보지 못하는 다른 나라나, 관광지 등을 시간과 공간의 제약에 구애받지 않고 가상현실이지만 실제 같은 듯한 느낌을 받으며 메타버스 안에서 모험을 하는 경험을 해볼 수 있을 것이다."
          introdepartment="명지대학교 시각디자인전공 1학년"
          introname="버피 기한나"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Burpee;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
  overflow-x: hidden;
`;

const PopUpBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ConnectedNav = styled.nav`
  background-image: url("/img/connewbg.png");
  background-size: contain;
  width: 100vw;
  height: 42vw;
  position: absolute;
  top: 13vw;
  display: flex;
  z-index: 10292;
  @media screen and (max-width: 770px) {
    background-image: url("/img/mobileframe.png");
    width: 100vw;
    height: 209vw;
    top: 70vw;
  }
`;
