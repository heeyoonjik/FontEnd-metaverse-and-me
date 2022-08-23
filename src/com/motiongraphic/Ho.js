import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Ho = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/Ho.png"
          introheading="<만남>"
          introheadingson="1920 X 1080px, 모션그래픽, 2022"
          introcontent="우리는 살면서 셀 수 없이 많은 만남을 하게된다 그 만남 중에는 ‘나’ 와 ‘나’의 만남 또한 존재하는데 내가 주제로 한 만남은 메타버스 세상속의 나와 현실세계 속의 나의 만남이다. 메타버스 세상속 나와 현실세계 속의 나는 과연 다른 사람일까? 같은 자아를 가졌다고 말 할 수 있을까? 이 작업은 만남을 상징하는 행위들을 반복적으로 보여줌으로써 만남이라는 것은 무엇이며 우리 삶에서 어떤 의미가 있는지 하여금 생각하게 한다."
          introdepartment="명지대학교 시각디자인전공 1학년"
          introname="호(虎) 박규리"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Ho;

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
