import React from "react";
import styled from "styled-components";
import ILLNAV from "./ILLNAV";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "./ConnectPop";

const WinderGarden = () => {
  return (
    <Inner>
      <ConnectedHeading heading="ILLUSTRATION" />
      <ConnectedNav>
        <ILLNAV></ILLNAV>
      </ConnectedNav>

      <PopUpBox>
        <ConnectPop
          imgurl="/img/WinderGarden.png"
          introheading="<Challenge!>"
          introheadingson="10 X 15cm, 아크릴 스탠드, 2022"
          introcontent="도이, 세인과 함께 무기를 들고 전투태세에 돌입한 원더가든. 비장한 자세와 무게있는 무기들과는 상반되게 미소를 띈 표정을 볼 수 있다. 이 싸움의 끝을 예상이라도 하듯 자신만만한 표정은 그녀의 성격을 들여다 볼 수 있다. 그녀가 들고다니던 토끼인형은 전투에 나갈때면 품 안 깊숙히 숨겨둔다. 안전한 장소에 두지 않고 깊숙히 숨겨두는 것은 그 토끼인형을 한번도 곁에 두지 않은적이 없기 때문이다. 토끼인형에 대한 설명은 자신의 또다른 I 페이지에서 자세히 볼 수 있다. "
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="원더가든 최정원"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default WinderGarden;

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
