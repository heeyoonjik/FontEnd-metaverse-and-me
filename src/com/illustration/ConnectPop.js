import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ConnectPop = ({
  imgurl,
  introheading,
  introheadingson,
  introcontent,
  introdepartment,
  introname,
  btn1,
  btn2,
}) => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);
  return (
    <Inner data-aos="zoom-out-down">
      <MobileHeadingBox>
        <MobileHeading>{introheading}</MobileHeading>
        <MobileHeadingSon>{introheadingson}</MobileHeadingSon>
      </MobileHeadingBox>
      <ImgBox url={imgurl}></ImgBox>
      <IntroBox>
        <IntroUpper>
          <IntroUpperHeadingBox>
            <IntroUpperHeading>{introheading}</IntroUpperHeading>
            <IntroUpperHeadingSon>{introheadingson}</IntroUpperHeadingSon>
          </IntroUpperHeadingBox>
          <IntroUpperP>{introcontent}</IntroUpperP>
        </IntroUpper>
        <IntroLowerFlex>
          <IntroLower>
            <IntroLowerDepartment>{introdepartment}</IntroLowerDepartment>
            <IntroLowerName>{introname}</IntroLowerName>
          </IntroLower>
          <CannonBtnLink to="/Connected/MotionGraphic/Cannon/2" btn1={btn1}>
            <CannonBtnImg src="/img/CannonBtnto2.png" />
          </CannonBtnLink>
          <CannonBtnLink2 to="/Connected/MotionGraphic/Cannon" btn2={btn2}>
            <CannonBtnImg src="/img/CannonBtnto1.png" />
          </CannonBtnLink2>
        </IntroLowerFlex>
      </IntroBox>
    </Inner>
  );
};

export default ConnectPop;

const Inner = styled.div`
  position: absolute;
  top: 21.5vw;
  display: flex;
  height: 30.6vw;
  width: 95.6vw;
  margin-left: 1.3vw;
  z-index: 99998;
  @media screen and (max-width: 770px) {
    top: 79vw;
    flex-direction: column;
    height: 200vw;
    width: 100vw;
    margin-left: 0vw;
    align-items: center;
  }
`;

const ImgBox = styled.div`
  background-image: url(${(props) => props.url});
  width: 56vw;
  background-size: cover;
  background-color: black;
  @media screen and (max-width: 770px) {
    height: 48vw;
    width: 83vw;
  }
`;

const IntroBox = styled.div`
  background-color: white;
  width: 39vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 770px) {
    width: 83vw;
  }
`;

const IntroUpper = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vw;
  @media screen and (max-width: 770px) {
    height: 105vw;
  }
`;

const IntroUpperHeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 5.5vw;
  border-bottom: 1px solid black;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const IntroUpperHeading = styled.h1`
  color: black;
  font-family: SDGothicBold;
  font-size: 1.9vw;
  margin-right: 1.3vw;
  margin-top: 0.8vw;
`;
const IntroUpperHeadingSon = styled.p`
  color: black;
  font-size: 0.9vw;
  margin-right: 1.3vw;
`;

const IntroUpperP = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  margin: 1vw 1vw;
  font-size: 1.2vw;
  @media screen and (max-width: 770px) {
    font-size: 3.8vw;
    padding: 3.3vw;
  }
`;

const IntroLower = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-direction: column;
  height: 4vw;
  border-top: 1px solid black;
  justify-content: center;
  font-size: 1vw;
  @media screen and (max-width: 770px) {
    height: 21vw;
    padding-left: 3vw;
    font-size: 3.5vw;
  } */
`;
const IntroLowerFlex = styled.div`
  display: flex;
  height: 4vw;
  border-top: 1px solid black;
  justify-content: space-between;
  align-items: center;
  font-size: 1vw;
  @media screen and (max-width: 770px) {
    height: 21vw;
    padding-left: 3vw;
    font-size: 3.5vw;
  }
`;

const IntroLowerDepartment = styled.p`
  color: black;
  margin-left: 1vw;
`;
const IntroLowerName = styled.p`
  color: black;
  margin-left: 1vw;
`;

const MobileHeadingBox = styled.div`
  display: none;
  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    height: 5.5vw;
    border-bottom: 1px solid black;
    height: 17vw;
    width: 83vw;
    background-color: white;
  }
`;

const MobileHeading = styled.h1`
  display: none;
  @media screen and (max-width: 770px) {
    color: black;
    display: block;
    font-family: SDGothicBold;
    font-size: 6vw;
    margin-right: 2.5vw;
    margin-top: 0.8vw;
  }
`;

const MobileHeadingSon = styled.p`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    color: black;
    font-size: 3vw;
    margin-right: 2.5vw;
  }
`;

const CannonBtnLink = styled(Link)`
  display: ${({ btn1 }) => btn1};
`;

const CannonBtnImg = styled.img`
  width: 2.031vw;
  margin-right: 1.042vw;
  @media screen and (max-width: 770px) {
    width: 9vw;
    margin-right: 3.5vw;
  }
`;

const CannonBtnLink2 = styled(Link)`
  display: ${({ btn2 }) => btn2};
`;
