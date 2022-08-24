import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import ConnectPop from "./ConnectPop";
import { ConnectedHeading } from "../ConnectedHeading";
const Casper = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>

      <PopUpBox>
        <ConnectPop
          imgurl="/img/casper.png"
          introheading="<탐험>"
          introheadingson="15 X 18cm, 아크릴 스탠드, 2022"
          introcontent="증강현실 안에서는 우리가 현실에서 쉽게 만나지 못하는 친구나, 먼 나라에서 사는 외국인 등을 아바타를 통해 빠르게 만날 수 있다. 그녀는 새로운 경험과 모험을 갈망하기 때문에 메타버스라는 곳은 그녀에게 더할나위 없이 자유로운 공간이다. 자신이 창조한 가상친구, 문어 로봇과 다른 차원을 넘나들며 새로운 사람들을 만나고 친해지며 탐험을 즐기던 중 자신과 같이 머리로 구상한 것을 프로그래밍해서 메타버스 안에 구현하고, 탄생시키는 것을 좋아하는 친구를 만나 같이 아바타를 공유하고 소통하는 모습을 담았다."
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="캐스퍼 최이선"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Casper;

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
