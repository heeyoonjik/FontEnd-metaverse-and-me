import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "./ConnectPop";

const Sein = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="http://localhost:3000/img/sein.png"
          introheading="<존재[有]>"
          introheadingson="150 X 65mm, 아크릴 스탠드, 2022"
          introcontent="존재[有]란 의식으로부터 독립하여 외계[外界]에 객관적으로 실재함을 뜻한다. 평소에도 우리가 현실이라 느끼는 지금을 의심해 본 적이 있다. 이런 의심을 나의 캐릭터 SEIN(세인)에게 대입시켜 보고 싶었다. SEIN은 존재[有]라는 의미의 이름을 가졌다. 이 캐릭터 또한 본인의 세계가 현실이라고 생각할지도 모른다. 존재의 정의를 과연 우리가 내릴 수 있는 것일까? 아직도 의문투성이다. 한순간에는 무엇이 정답인지 판단하지 못하는 지경에 이르기도 한다. 끝없이 의심하는 SEIN은 결국 다른 세계의 본인이 있다는 것을 스스로 인지하게 되고, 그 세계의 SEIN과 만나고 싶어 한다. 궁금한 것을 참지 못해 SEIN은 위험할 것을 알면서도 곧바로 다른 세계의 SEIN을 만나기 위해 나갈 채비를 한다. ‘나’를 찾기 위해."
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="SEIN(세인) 김경은"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Sein;

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
