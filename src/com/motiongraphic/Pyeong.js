import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Pyeong = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/Pyeong.png"
          introheading="<변화>"
          introheadingson="1920 X 1080px, 포토리얼리즈믹 그래픽아트워크, 2022"
          introcontent="메타버스 세상에서 우리는 어느곳이든 갈 수 있다. 우주든지 바다든지 숲속이든지 공간과 시간의 제약을 받지 않는 곳이 메타버스 속 세상이다. 기술의 발전에 따라 우리는 더더욱 현실같은 비현실속에 익숙해질 날이 올 것이다"
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="평 안예빈"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Pyeong;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
`;

const PopUpBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
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
