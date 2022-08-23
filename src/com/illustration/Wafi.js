import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "./ConnectPop";
const Wafi = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="http://localhost:3000/img/wafi.png"
          introheading="<탄생>"
          introheadingson="150 X 65mm, 아크릴 스탠드, 2022"
          introcontent="또다른 나를 상징하는 가상 현실 속의 캐릭터는 나의 수많은 생각과 몽상에서 태어난다. 내 상상 속 정체성을 모두 투영하는 투명한 구 속에서 만난 또다른 나의 ‘탄생’은 부드러운 몽상의 구름, 사랑스러운 상상의 파도와 함께 그 순간으로 남았다. 유리알 맺혀 빛나는 잔망스러운 토끼 헬멧과 그 속에 가득 찬 과일과 식물들은 그녀가 탄생한 그 순간 조차도 상상에 가득 차있는지 보여주며, 자연과 녹음에 잘 어우러짐에도 톡톡 튀는 라임색의 겉모습은 그녀의 어린아이 같은 면을, 그럼에도 차분한 그녀의 머리 색은 그녀의 어른 스러운 면을 보여준다. 그녀의 예측불가인 행동인 주황색 눈화장으로 빛나는 눈은 헬멧으로도 감출 수 없는 그녀의 표정을 그대로 적나라하게 보여준다. "
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="와피 박진영"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Wafi;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
  overflow-x: hidden;
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

const PopUpBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
