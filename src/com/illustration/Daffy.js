import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import ConnectPop from "./ConnectPop";
import { ConnectedHeading } from "../ConnectedHeading";
const Daffy = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/daffy.png"
          introheading="<Fiction world>"
          introheadingson="15 X 18cm, 아크릴 스탠드, 2022"
          introcontent="또 다른 나를 상징하는 가상 현실 속의 캐릭터는 나의 수많은 생각과 몽상에서 태어난다. 내 상상 속 정체성과 내가 되고 싶은 나의 모습 모두를 투영하는 투명한 캡슐은 나의 메타버스 세상 그 자체를 시각화해놓은 것이다. 모두, 자신이 사는 세계와 그 속의 자신이 전부 다르면서 섞이지 않듯, 캡슐 속의 세계 또한 모두 다르며 두 캡슐은 서로 분리되어 공존하고 있다. 
          현실 세계의 내면의 상징들과 나의 아이덴티티, 그리고 내가 원하는 나의 모습으로 가상세계 나의 모습을 구성하면서 메타버스 속 새로운 나지만 누구보다도 실제의 나를 보여주는 순간을 담았다."
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="다피 이우진"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Daffy;

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
