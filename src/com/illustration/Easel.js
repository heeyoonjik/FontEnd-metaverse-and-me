import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "./ConnectPop";

const Easel = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/easel.png"
          introheading="<여정>"
          introheadingson="8 X 15cm, 아크릴 스탠드, 2022"
          introcontent="코로나와 같은 여러 현실적인 요인으로 인해서 여행을 가기가 힘들어진 요즘 세상에서 메타 버스 내에서는 별다른 요인에 구애받지 않고 가고 싶은 곳을 여행할 수 있다. 이러한 여행을 통해서 다양한 경험을 할 수 있고 자신의 선호를 알 수 있고 이를 토대로 자신의 가치관을 형성하며 자신의 세계를 넓혀나갈 수 있다. 그리고 일상생활에서 벗어나 다양한 곳을 여행하며 자유을 만끽하고 여유를 느낄 수 있다. 요즘에 자유롭게 돌아다닐 수 없기에 캐릭터가 자유롭게 이곳 저곳 여행하며 문화등을 체험하는 모습을 담았다."
          introdepartment="명지대학교 시각디자인전공 1학년"
          introname="이젤 김미정"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Easel;

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
