import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Han = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="http://localhost:3000/img/Han.png"
          introheading="<Genuine>"
          introheadingson="1920 X 1080px, 애니메이션, 2022"
          introcontent="현실의 많은 사람과 많은 상황에 상처를 받던 우리.회복을 위해 쉼을 중요시하는 사회까지 흘러왔지만 과연 숨돌리며 살아가는 사람이 몇이나 있을까? 현재의 우리는 휴식에 대한 욕구가 가득하지만 현실은 결국 해소하지 못하는 상황을 재촉한다. 애니메이션 속 주인공은 휴식에 대한 갈망으로 인해 최소한의 자아만이 남아있다. 진정한 자신을 잃어버리고 헤매고 있던 찰나 한 줄기의 빛을 통해 또 다른 세계를 발견하게 된다. 주인공이 다다른 공간에서는 현실과는 구별되는 작은 세계들이 존재해있었다. 현실을 압축해놓은 듯한 공간이지만 또다른 자신을 자유롭게 표현하는 것이 매력적인 메타버스라는 사회속에서 주인공은 ‘진정한’ 나를 찾는다."
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="한 권예지"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Han;

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
