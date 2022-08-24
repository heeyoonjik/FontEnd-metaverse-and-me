import React, { useEffect } from "react";
import dummy from "../database/identityData.json";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
export const First = ({
  chracterName,
  realName,
  intro,
  imgurl,
  mobileintro,
  setOpenModal,
  ChangeModalValue,
  idValue,
  setnameId,
  ChangetestValue,
  setTestValue,
}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const IdNum = parseInt(idValue);
  function sendIdValue() {
    setnameId(IdNum);
  }
  const OTsrc = dummy.ots.filter((ots) => ots.img === IdNum);
  const sibal = OTsrc.map((e) => e.tasksrc);
  return (
    <Characterbox data-aos="fade-up">
      <CharacterImgBox>
        <ChracterImg src={imgurl} />
      </CharacterImgBox>
      <LowerBox>
        <ChracterkNameBox>
          <ChracterName>{chracterName}</ChracterName>
        </ChracterkNameBox>
        <RealName>{realName}</RealName>
        <IntroPBox>
          <IntroP>{intro}</IntroP>
          <MobileIntroP>{mobileintro}</MobileIntroP>
        </IntroPBox>
        <ImgBox>
          <GoImg
            src="img/identity/goIcon2.png"
            // onClick={sendIdValue}
            // onClick={ChangeModalValue}
            onClick={() => {
              sendIdValue();
              setTestValue(sibal);

              ChangeModalValue();
            }}
          />
        </ImgBox>
      </LowerBox>
    </Characterbox>
  );
};

const Characterbox = styled.div`
  width: 33.3vw;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid white;
  @media screen and (max-width: 770px) {
    width: 50.11vw;
  }
`;

const CharacterImgBox = styled.div`
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChracterImg = styled.img`
  height: 29.3vw;

  @media screen and (max-width: 770px) {
    height: 21.5vw;
  }
`;

const LowerBox = styled.div`
  display: grid;
  grid-template-columns: 4.3fr 1fr;
  grid-template-rows: 1fr 2fr;
  flex-direction: column;
  font-family: "SDGothic";
  @media screen and (max-width: 770px) {
    grid-template-columns: 2.9fr 1fr;
    grid-template-rows: 1fr 2fr;
    height: 29vw;
  }
`;

const ChracterkNameBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  @media screen and (max-width: 770px) {
    margin-right: -0.19vw;
  }
`;

const ChracterName = styled.p`
  font-family: "SDGothic";
  margin-left: 2vw;
  font-size: 2vw;
  @media screen and (max-width: 770px) {
    font-size: 3.7vw;
  }
`;

const RealName = styled.div`
  display: flex;
  font-family: "SDGothic";
  justify-content: center;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid white;
  font-size: 2vw;

  @media screen and (max-width: 770px) {
    font-size: 3.7vw;
  }
`;

const IntroPBox = styled.div`
  font-size: 1.3vw;
  display: flex;
  justify-content: center;
`;
const IntroP = styled.p`
  margin: 1vw 1vw;
  font-family: "SDGothic";
  line-height: 2.1vw;
  text-overflow: ellipsis;
  @media screen and (max-width: 770px) {
    font-size: 3vw;
    line-height: 4vw;
    display: none;
  }
`;
const MobileIntroP = styled.p`
  display: none;
  margin: 1vw 2vw;
  line-height: 2.1vw;
  text-overflow: ellipsis;
  font-family: "SDGothic";
  @media screen and (max-width: 770px) {
    display: block;
    font-size: 2.8vw;
    line-height: 4vw;
  }
`;

const ImgBox = styled.div`
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid white;
  cursor: pointer;
  @media screen and (max-width: 770px) {
    height: 100%;
  }
`;

const GoImg = styled.img`
  height: 7.6vw;

  @media screen and (max-width: 770px) {
    height: 11vw;
  }
`;
