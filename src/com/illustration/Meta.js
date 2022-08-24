import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "./ConnectPop";

const Meta = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/meta.png"
          introheading="<new world>"
          introheadingson="8 X 15cm, 아크릴 스탠드, 2022"
          introcontent="새로운 세계에서 찾는 또다른 나. 더이상 메타에게 가지 못하는 곳은 없다. 새로운 세상을 찾아 떠나는 모험은 늘 멋진 경험을 하게 해준다. 어제도 오늘도 내일도 메타는 여러공간으로 떠난다. "
          introdepartment="명지대학교 시각디자인전공 1학년"
          introname="메타 김나은"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Meta;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
  overflow-x: hidden;
`;

const ConnectedNav = styled.nav`
  background-image: url("/img/buddy.png");
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
const PopUpBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
