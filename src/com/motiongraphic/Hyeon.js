import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Hyeon = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="http://localhost:3000/img/Hyeon.png"
          introheading="<비현실의 시각화>"
          introheadingson="1920 X 1080px, 모션그래픽, 2022"
          introcontent="가상현실은 비현실의 시각화이다.
          가상현실에서 우리는 현실에서는 볼 수 없는 세계를 볼 수 있고, 상상만 하던 광경들을 시각적으로 만들어내는 것 또한 가능하다.  말 그대로 '가상세계'이기 때문이다. 이처럼 가상현실은 실존하지 않는 세상임에도 불구하고 우리에게 많은 자극과 감동을 줄 수 있다. 이 작품은 이에 집중해 현실에서 가상세계로 떠나 현실에서는 볼 수 없는 광경들을 보고 다시 현실로 돌아오는 스토리라인을 구성해 가상현실의 무한함과 감동, 그리고 비현실의 시각화에 대해 이야기하려 한다."
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="현 김현지"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Hyeon;

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
  background-image: url("http://localhost:3000/img/buddy.png");
  background-size: cover;
  width: 100.3vw;
  height: 42vw;
  position: absolute;

  top: 13vw;
  z-index: -10;
  display: flex;
  z-index: 10292;
  @media screen and (max-width: 770px) {
    background-image: url("http://localhost:3000/img/mobileframe.png");
    width: 100vw;
    height: 209vw;
    top: 70vw;
  }
`;
