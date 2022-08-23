import React, { useState } from "react";
import dummy from "../database/identityData.json";
import styled from "styled-components";
import { MoralTW } from "./MoralTW";

export const Modal = (props) => {
  const peoples = dummy.contents.filter((name) => name.id === props.nameId);

  const [mobileModalShow, setMobileModalShow] = useState(false);
  const ChangemobileModalShow = () => {
    setMobileModalShow((e) => !e);
  };
  return props.openModal ? (
    <Inner data-aos="fade">
      {peoples.map((people) => (
        <ModalBlock key={people.id}>
          <MobileModalHeader>
            <MobileModalNameBox>
              <MobileModalRightCharacterName>
                {people.chracterName}
              </MobileModalRightCharacterName>
              <MobileModalRightRealName>{people.name}</MobileModalRightRealName>
            </MobileModalNameBox>
            <MobileCancleBtn onClick={props.ChangeModalValue}>
              <MobileCancleBtnImg src="img/identity/canclebtn.png" />
            </MobileCancleBtn>
          </MobileModalHeader>
          <LeftImgSection onClick={ChangemobileModalShow}>
            <LeftImg src={props.testValue} />
          </LeftImgSection>
          <ModalRightSection>
            <ModalRightHeader>
              <ModalRightNameBox>
                <ModalRightCharacterName>
                  {people.chracterName}
                </ModalRightCharacterName>
                <ModalRightRealName>{people.name}</ModalRightRealName>
              </ModalRightNameBox>
              <CancleBtn onClick={props.ChangeModalValue}>
                <CancleBtnImg src="img/identity/canclebtn.png" />
              </CancleBtn>
            </ModalRightHeader>
            <ModalRightIntroBox>
              <ModalIntroP>{people.intro}</ModalIntroP>
            </ModalRightIntroBox>
            <ModalRightFooter>
              <MoralTW
                idValue={props.nameId}
                setTestValue={props.setTestValue}
              />
            </ModalRightFooter>
          </ModalRightSection>
        </ModalBlock>
      ))}
      <MobileImgModal
        mobileModalShow={mobileModalShow}
        testValue={props.testValue}
        ChangemobileModalShow={ChangemobileModalShow}
      />
    </Inner>
  ) : (
    ""
  );
};

const Inner = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 99999999;
`;

const ModalBlock = styled.div`
  width: 76.61vw;
  height: 43.39vw;
  display: flex;
  border: 1px solid white;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    width: 83.333vw;
    height: 167.179vw;
    border: 0.75px solid white;
    overflow: auto;
    background-color: white;
  }
`;

const CancleBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const CancleBtnImg = styled.img`
  width: 2.6vw;
  margin-right: 1vw;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const MobileCancleBtn = styled.button`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    margin-bottom: 7vw;
  }
`;

const MobileCancleBtnImg = styled.img`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    width: 2.6vw;
    margin-right: 1.5vw;
    width: 3.5vw;
  }
`;

const LeftImgSection = styled.section`
  background-color: black;
  width: 31.198vw;
  height: 43.385vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 770px) {
    width: 83.333vw;
    height: 77.436vw;
  }
`;

const LeftImg = styled.img`
  object-fit: contain;
  width: 80%;
  height: 80%;
`;

const ModalRightSection = styled.section`
  background-color: white;
  width: 47vw;
  @media screen and (max-width: 770px) {
    width: 83.333vw;
  }
`;

const ModalRightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4.323vw;
`;

const ModalRightNameBox = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 2.433vw;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const ModalRightCharacterName = styled.p`
  color: black;
  font-family: "SDGothicBold";
  margin-left: 2vw;
  margin-right: 1.5vw;
  font-size: 2.5vw;
`;

const ModalRightRealName = styled.p`
  color: black;
  font-family: "SDGothic";
  font-size: 1.25vw;
  margin-bottom: 0.4vw;
`;

const MobileModalHeader = styled.div`
  display: none;
  @media screen and (max-width: 770px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 17vw;
  }
`;

const MobileModalNameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MobileModalRightCharacterName = styled.p`
  color: black;
  font-family: "SDGothicBold";
  margin-left: 5.128vw;
  font-size: 6.154vw;
`;

const MobileModalRightRealName = styled.p`
  color: black;
  font-family: "SDGothic";
  margin-left: 5.7vw;
  font-size: 3.333vw;
`;

const ModalRightIntroBox = styled.div`
  width: 27vw;
  margin-left: 2.24vw;
  height: 21.1vw;
  font-size: 1.25vw;
  color: black;
  @media screen and (max-width: 770px) {
    height: 46.923vw;
    width: 60.769vw;
    margin-left: 5.897vw;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 1.282vw;
    }
    ::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
`;

const ModalIntroP = styled.p`
  color: black;
  font-size: 1.25vw;
  line-height: 150%;
  font-family: "SDGothic";
  @media screen and (max-width: 770px) {
    font-size: 3.846vw;
  }
`;

const ModalRightFooter = styled.div`
  border-top: 1px solid black;
  height: 7.448vw;
  display: flex;
  @media screen and (max-width: 770px) {
    border-top: 0;
  }
`;
const MobileImgModal = ({
  mobileModalShow,
  testValue,
  ChangemobileModalShow,
}) => {
  return mobileModalShow ? (
    <MobileModalInner>
      <MobileModalImgBox>
        <MobileModalCancleImg
          src="img/mobilmodalcancle.png"
          onClick={ChangemobileModalShow}
        />
        <MobileModalImg src={testValue} />
      </MobileModalImgBox>
    </MobileModalInner>
  ) : (
    ""
  );
};

const MobileModalInner = styled.div`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
    z-index: 9999999999;
  }
`;
const MobileModalImgBox = styled.div`
  width: 100vw;
  object-fit: cover;
  margin-top: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileModalImg = styled.img`
  width: 100%;
`;

const MobileModalCancleImg = styled.img`
  position: relative;
  left: 45vw;
  top: 11vw;
`;
