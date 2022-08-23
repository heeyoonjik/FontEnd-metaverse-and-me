import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Cannon2 = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/Cannon2.png"
          introheading="<Indicator Of Time&#38;Space>"
          introheadingson="1920 X 1080px, 모션그래픽 - C4d/Ae, 2022"
          introcontent={
            <>
              &#60;2. Advance For What?&#62;
              <br />
              현실에서도 원활하게 다루지 못하는 불공정한 발생 요인들이 과연
              현실에서 비롯된 가상 세계, 우리가 앞으로 마주할 메타버스에는
              없을까? 기술이 발전되면서 이를 적응하고 따라가는 사람들과 그렇지
              못하는 사람들이 생겨난다. 언제부턴가 모든 곳에 설치된 키오스크는
              적응하지 못해 당황하는 사람들을 만들어낸다. 기술 발전으로부터의
              빈부 격차와 위계구조가 형성되는 것이다. 맹목적인 새로움을 외치는
              기술에 편승하기보다 우리가 살아가는 세상에 대한 정돈이 필요하다.
              기술의 발전은 상업적 목적이 아닌 후대를 위한 인류의 역사 중 하나의
              시대로 기록될 길이어야 할 것이다. 그렇다면 먼저 현재의 것들을
              정리하고 앞으로 나아가야하는가? 우리는 무엇을 해야하는가?
            </>
          }
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="캐넌 이채린"
          btn1="none"
          btn2="block"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Cannon2;

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
