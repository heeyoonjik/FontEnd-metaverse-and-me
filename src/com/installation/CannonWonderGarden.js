import React from "react";
import styled from "styled-components";
import { ConnectedHeading } from "../ConnectedHeading";
import ConnectPop from "../illustration/ConnectPop";
import INSNAV from "./insnav";

const CannonWonderGarden = () => {
  return (
    <Inner>
      <ConnectedHeading heading="INSTALLATION" />
      <ConnectedNav>
        <INSNAV></INSNAV>
      </ConnectedNav>
      <PopUpBox>
        <ConnectPop
          imgurl="/img/CannonWonderGarden.png"
          introheading="<차원>"
          introheadingson="1660 X 1000mm, 합성재료, 2022"
          introcontent="‘메타버스’ 라는 단어를 떠올리면 저마다 무수히 다른 이미지를 그려낼 것이다. 전시의 전체적인 모티프를 또다른 나와 진정한 나로 잡았기 때문에 진정한 나의 모습을 보여줄 수 있는 ‘차원’을 빗대어 정사각형의 모양이 반복되는 그리드, 큐브같은 요소들을 전시 곳곳에서 발견할 수 있다. 전시의 전반적인 요소와 통일되는 컨셉으로 꾸며진 이 작업물은 포토존을 염두해놓고 꾸며진 공간이다. 뒷 배경과 마찬가지로 앞에 놓여진 박스들은 통일성에 좀 더 다채로운 색을 포인트로 보여주고 있다. 이번 전시가 눈으로만 즐기는 것이 아닌 다양한 체험을 통해 당신이 어떠한 경험을 했다고 느끼기를 바란다. "
          introdepartment="명지대학교 시각디자인전공 3학년"
          introname="캐넌 이채린 / 원더가든 최정원"
          btn1="none"
          btn2="none"
        />
      </PopUpBox>
    </Inner>
  );
};

export default CannonWonderGarden;

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
