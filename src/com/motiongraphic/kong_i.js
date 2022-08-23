import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Kongi = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="http://localhost:3000/img/Kongi.png"
          introheading="<선택>"
          introheadingson="1920 X 1080px, 모션그래픽, 2022"
          introcontent="가상현실에 대해 다룬 영화<메트릭스>속 알약은 선택의 은유이다.
          여기서 모티브를 얻어 영상에선 우리가 살고 있는 현실을 가상 세계였다고 상정하고 오감이 통제되어 진짜라고 믿고 있는 이 가상세계에서 영원히 살 것인지 진실을 마주할 것인지를 선택하게 한다.
          영상의 주제는 앞으로 가상세계가 발전함에 따라 일어날 수도 있는 재밌는 상상을 하다가 생각난 아이디어였지만 한 번쯤 깊게 생각해보면 좋을 주제라고 생각되어 영상을 만들게 되었다."
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="콩이 곽우진"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Kongi;

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
