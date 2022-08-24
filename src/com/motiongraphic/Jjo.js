import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Jjo = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/Jjo.png"
          introheading="<분인>"
          introheadingson="1920 X 1080px, 비디오아트, 2022"
          introcontent="급변하는 사회에서 우리는 본질적 내면을 탐색할 필요가 있다. 수없이 많은 ‘분인’이 탄생하고 소멸하는 가운데 동요하지 않으려면, 우리는 자신을 대표하는 정체성을 찾고 단단한 자아를 형성해야 한다. 이 작업은 ‘멀티 페르소나 가운데 무엇이 진정한 나의 모습인가?’라는 질문에서 시작했다. 무수한 생각 끝에 나는 ‘그들 모두가 나이며, 나는 이미 무엇이 나를 대표하는지 알고 있음.’을 깨닫았다. 소설가 히라노 게이치로가 제시한 ‘분인’이라는 개념이 메타버스 속 멀티 페르소나와 닮았다고 생각해, 이를 영상에 도입했다. 또한 철학적 주제, 반복, 패턴 등을 잘 표현할 수 있도록 비디오아트를 메인 컨셉으로 설정했으며, 영상 초반에는 관련 개념을 설명하고 후반에는 질문을 던져 관람자의 이해와 고민을 유도했다."
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="쪼 조용욱"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Jjo;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 2000;
`;

export const IntroductionHeading = styled.h1`
  font-family: "BaunkSans";
  font-size: 4.5vw;
  padding-top: 7.2vw;
  margin-left: 2.9vw;
  padding-bottom: 2vw;
  z-index: 9999;
  @media screen and (max-width: 770px) {
    font-size: 6.5vw;
    padding-top: 25vw;
    padding-bottom: 9vw;
    margin-left: 9vw;
  }
`;

export const MobileIntroductionHeading = styled.h1`
  display: none;
  @media screen and (max-width: 770px) {
    display: none;
    font-family: "BaunkSans";
    padding-bottom: 2vw;
    font-size: 6.5vw;
    padding-top: 25vw;
    padding-bottom: 9vw;
    margin-left: 9vw;
  }
`;

const PopUpBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
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
