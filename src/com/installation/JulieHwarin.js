import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import INSNAV from "./insnav";

const JulieHwarin = () => {
  return (
    <Inner>
      <ConnectedHeading heading="INSTALLATION" />
      <ConnectedNav>
        <INSNAV></INSNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/JulieHwarin.png"
          introheading="<시선>"
          introheadingson="594 X 420mm, 거울지와 필름지, 2022"
          introcontent="우리는 거울을 통해 ‘나’를 마주한다. 거울은 가감 없이 나를 비추지만, 내가 거울을 바라보는 시선 속에는 나의 이상과 가치관이 담겨있다. 그렇기에 우리는 거울로 또 다른 나를 본다.
          이러한 거울의 성질은 메타버스의 것과 유사하다. 우리는 이를 사람의 신체기관인 ‘눈’을 빌려 표현했다. 사람들이 각자 정의하는 메타버스의 이미지들로 눈을 표현함과 동시에 거울을 활용하여 보는 이로 하여금 자신의 시선이 투영될 수 있도록 했다. 대개 눈으로 사물을 보고 판단하는 과정에서 자신의 주관이 드러나기 때문이다.
          시인 이상의 ‘거울’처럼, 우리는 거울과 눈을 매개로 나의 내면에 있는 또 다른 나를 마주하고 탐구한다."
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="줄리 최성경 / 화린(華粼) 신민경"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default JulieHwarin;

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
