import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import INSNAV from "./insnav";

const LoaJyeon = () => {
  return (
    <Inner>
      <ConnectedHeading heading="INSTALLATION" />
      <ConnectedNav>
        <INSNAV></INSNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="http://localhost:3000/img/loaJyeon.png"
          introheading="<Connect the Two World>"
          introheadingson="140 X 60 X 230cm, 폴리에틸렌·골판지박스·시트지, 2022"
          introcontent="메타버스라고 하면 낯설거나 멀게만 느끼는 사람이 많다. 하지만 사실 메타버스는 이미 우리의 삶 속에 있으며 너무나도 가까이 존재하고 있다. 그래서 우리는 메타버스와 현실세계가 이미 연결되어 있음을 조형물로 표현하고자 하였다.
          현실세계를 의미하는 거울과, 메타버스 세상을 의미하는 문을 골판지박스와 시트지를 이용해 제작하였다. 이 문과 거울을 연결시켜주는 매개체는 계단이다. 폴리에틸렌 메트를 활용해 깔끔하고 견고한 계단을 완성하였다. 이렇게 완성된 계단을 따라 올라가면 양 옆으로 문과 계단이 보인다. 우리는 언제든지 이 계단을 통해 메타버스세상을 오갈 수 있다."
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="로아 송지윤 / 젼 박지현"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default LoaJyeon;

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
