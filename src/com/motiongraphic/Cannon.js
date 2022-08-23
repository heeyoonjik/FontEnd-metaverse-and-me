import React from "react";
import styled from "styled-components";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";
import { ConnectedHeading } from "../ConnectedHeading";

const Cannon = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/Cannon1.png"
          introheading="<Indicator Of Time&#38;Space>"
          introheadingson="1920 X 1080px, 모션그래픽 - C4d/Ae, 2022"
          introcontent={
            <>
              &#60;1. Advance&#62; <br />
              현실의 ‘나’ 를 알고 난 이후에서야 우리는 우리의 복제 형태를
              만들어낼 수 있다. 본질이 없다면 잉태되는 것의 본질 또한 없기
              때문이다. ‘Advance’ 영상은 작업자가 지향하는 현실과 가상 세계의
              연결점을 표현하기 위해 사람의 모습과 메타버스 아트워크로
              구성되었다. 점점 개인이 원하는 거대한 세상을 만들어갈 수 있는 힘이
              생겨간다. 세상은 자유롭고 어떠한 것에도 국한되지 않은 본인만의
              개성과 창의성으로 채워진다.
            </>
          }
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="캐넌 이채린"
          btn1="block"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Cannon;

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
