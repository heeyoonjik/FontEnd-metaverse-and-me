import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "./ConnectPop";
const Z = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/z.png"
          introheading="<OO PLAYGROND>"
          introheadingson="10 X 15cm, 아크릴 스탠드, 2022"
          introcontent="여기 메타버스 속 나, 제트에게 메타버스란 궁극의 무기도, 새로운 시대의 시작점도 아니다.
          가상 현실은 무한 그 자체다. 무한함을 여가와 오락으로 즐기는 것이 가장 탁월하다는 생각의 연장선인 제트는 메타버스에서 언제나 즐거움을 쫓고 자유를 추구하는 캐릭터이다. 
          그렇기에 그는 이곳을 제약없는 놀이터라고 여길 때 가장 그 다울 수 있다.
          제트가 무한한 놀이터 속에서 느낄 수 있는 즐거움 중 하나를 이 작업에 담았다. 시공간 제약 없이 자유로이 날아다니는 메타버스 속에서는 타인과 만나는 것에도 전혀 어려움이 없다. 제트와 상대 캐릭터 각자의 동물 친구들이 차원을 넘나드는 모습은 그가 가상 현실 속에서 즐기는 활동 중 하나를 보여 준다."
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="Z(제트) 한유진"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Z;

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
