import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import INSNAV from "./insnav";

const DoiBonnie = () => {
  return (
    <Inner>
      <ConnectedHeading heading="INSTALLATION" />
      <ConnectedNav>
        <INSNAV></INSNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/DoiBonnie.png"
          introheading="<연결 (Connect)>"
          introheadingson="480 X 1250mm, 합성재료, 2022"
          introcontent={
            <>
              우리는 메타버스 세계관을 ‘자유’로 정의하였다.자유를 상징하는
              나비는 가상세계와 현실 세계를 연결하는 매개체이다. 두 세계를
              자유롭게 넘나드는 나비떼는 가상세계와 현실세계의 연결을
              시각화한다. 이는 메타버스 세계관의 무한한 가능성을 보여준다.
              <br />
              1.천장 거울은 가상세계를 상징하고, 바닥 거울은 현실 세계를
              상징한다. 각 세계를 상징하는 Blue, White 컬러의 조명을 사용하였다.
              <br />
              2. 두 거울 사이에 여러 갈래의 전선을 엮어 두 세계를 연결한다.
              <br /> 3. 천장 거울에 나비 오브제를 설치하여 가상세계와 현실
              세계를 연결시키는 매개체 역할을 한다
            </>
          }
          introdepartment="명지대학교 시각디자인전공 2학년"
          introname="도이 박도은 / Bonnie 김자연"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default DoiBonnie;

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
