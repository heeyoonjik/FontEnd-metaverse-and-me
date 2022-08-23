import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import MotNav from "./MotNav";

const Pixie = () => {
  return (
    <Inner>
      <ConnectedHeading heading="MOTION" />
      <ConnectedNav>
        <MotNav></MotNav>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/Pixie.png"
          introheading="<진취적 템포>"
          introheadingson="1920 X 1080px, 콜라주+모션그래픽, 2022"
          introcontent="사람들은 각자의 템포의 맞춰 살아가고 있다. 조금 빠른 템포, 조금은 느린 템포. 자신의 템포의 맞춰 살아가는 중에서도 우리는 진취적인 템포를 가져야 한다. 메타버스 세계 안에서는 자신을 원하는 모습으로 자유롭게 생성해낸 후 게임뿐만이 아닌 사회. 문화적 활동을 하거나 경제적 가치를 창출해낼 수 있다. 우리는 그 모습을 통해 적극적으로 나아가 일을 이룩해내야 한다. 현대사회 속에서 변화를 느끼며, 자신의 템포에 맞춰 스스로 성취하고 이루어 나가며 성장해야 되는 시대이다. "
          introdepartment="명지대학교 시각디자인전공 1학년"
          introname="픽시 강지수"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default Pixie;

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
