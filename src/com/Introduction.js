import React, { useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Inner>
      <Content>
        <IntroductionHeading>INTRODUCTION </IntroductionHeading>
        <PosterBox data-aos="fade-up" data-aos-once="true">
          <WhitePoster src="img/white.png" alt="white poster" />
          <BlackPoster src="img/black.png" alt="black poster" />
        </PosterBox>
        <ShadowEffect
          src="img/shadow.png"
          alt="shadow"
          data-aos="fade-up"
          data-aos-once="true"
        />
        <SliderBox>
          <Marquee gradient={false} speed="100">
            <SliderData>
              <Icon1 src="img/vector1.png" alt="icon1" />
              <Icon2 src="img/vector2.png" alt="icon2" />
              <Icon1 src="img/vector1.png" alt="icon1" />
              <Icon2 src="img/vector2.png" alt="icon2" />
              <Icon1 src="img/vector1.png" alt="icon1" />
              <Icon2 src="img/vector2.png" alt="icon2" />
            </SliderData>
          </Marquee>
        </SliderBox>
        <MobileSliderBox>
          <Marquee gradient={false} speed="20">
            <SliderData>
              <Icon1 src="img/vector1.png" alt="icon1" />
              <Icon2 src="img/vector2.png" alt="icon2" />
              <Icon1 src="img/vector1.png" alt="icon1" />
              <Icon2 src="img/vector2.png" alt="icon2" />
              <Icon1 src="img/vector1.png" alt="icon1" />
              <Icon2 src="img/vector2.png" alt="icon2" />
            </SliderData>
          </Marquee>
        </MobileSliderBox>
        <IdentitySection>
          <IdentityP
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="300"
            data-aos-once="true"
          >
            미지의 영역에서 길을 잃지 않으려면 우선 ‘나’를 알아야 합니다. 지난
            사회가 정해온 우리의 수많은 아이덴티티를 파괴하고 재형성하며, 우리는
            진실한 내면을 탐색합니다.
            <br /> <br />
            인간이 창조한 새로운 영역에서 서로를 당당히 마주 보며, 우리는 비로소
            타인과 연결되고, 개성과 주체성을 가지며, 더욱 창의적인 아이덴티티로
            거듭납니다. 나와 당신은 진정한 ‘나’를 찾고. ‘나’의 생각을 설계하며,
            <br />
            상대방과 ‘나’를 연결합니다.
          </IdentityP>

          <IdentityLine
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="true"
          />
          <Star
            src="img/star.png"
            alt="star"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="true"
          />
        </IdentitySection>
        <CreditBox>
          <ArtistSection
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="true"
          >
            <Heading>Artist</Heading>
            <CreaterBox>
              최정원 최성경 조용욱 권예지 신민경 김경은
              <br />
              <br /> <br />
              <br /> <br />
              송지윤 최이선 김자연 이채린 박도은 강지수
              <br /> <br /> <br />
              곽우진 박지현 박진영 김미정 한유진 안예빈
              <br /> <br /> <br />
              기한나 김나은 이우진 김재욱 김현지 박규리
            </CreaterBox>
          </ArtistSection>
          <WebDesignSection
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="true"
          >
            <Heading>Web Design</Heading>
            <CreaterBox>최성경 조용욱 최정원</CreaterBox>
          </WebDesignSection>
          <WebDeveloperSection
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="true"
          >
            <Heading>Web Developer</Heading>
            <CreaterBox>김희윤 김해찬</CreaterBox>
          </WebDeveloperSection>
        </CreditBox>
      </Content>
      <Line>
        <HorizontalityLine />
        <VLineFlex>
          <VerticalLine1 />
          <VerticalLine1 />
        </VLineFlex>
        <VLineFlex>
          <VerticalLine2 />
          <VerticalLine2 />
        </VLineFlex>
      </Line>
      <Noimg src="img/introBg.png" alt="hi" />
    </Inner>
  );
};

const marginTop = "20vw";

export default Introduction;

const Inner = styled.div`
  background-image: url("img/introBg.png");
  background-size: cover;
  position: absolute;

  @media screen and (max-width: 770px) {
    height: 450vw;
  }
`;

const Noimg = styled.img`
  display: none;
`;

const Content = styled.div`
  z-index: 120120;
  @media screen and (max-width: 770px) {
    margin-top: ${marginTop};
  }
`;

const IntroductionHeading = styled.h1`
  font-family: "BaunkSans";
  font-size: 4.5vw;
  padding-top: 8vw;
  margin-left: 2.5vw;
  padding-bottom: 2vw;
  @media screen and (max-width: 770px) {
    font-size: 7vw;
    padding-top: 1vw;
    padding-bottom: 9vw;
    margin-left: 7vw;
  }
`;

const HorizontalityLine = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.6);
`;

const VerticalLine1 = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.6);
  height: 100%;
  margin: 0 4.5vw;
  padding-top: 91%;
  z-index: -10;
  @media screen and (max-width: 770px) {
    margin: 0 7.3vw;
  }
`;

const VerticalLine2 = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.6);
  height: 100%;
  margin: 0 4.5vw;
  padding-top: 200%;
  margin-top: 30vw;
  z-index: -100;
  @media screen and (max-width: 770px) {
    margin: 0 7.3vw;
    margin-top: 23vw;
    padding-top: 300%;
  }
`;

const Line = styled.div`
  width: 100vw;
  position: absolute;
  top: 14vw;
  z-index: -1221;
  height: 280vw;
  overflow: hidden;
  @media screen and (max-width: 770px) {
    height: 315vw;
    margin-top: ${marginTop};
  }
  @media screen and (max-width: 420px) {
    height: 420vw;
  }
`;

const VLineFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PosterBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 10vw;
  z-index: 2000;
`;

const WhitePoster = styled.img`
  height: 64.3vw;
  @media screen and (max-width: 770px) {
    height: 60.1vw;
  }
`;

const BlackPoster = styled.img`
  height: 64.3vw;
  @media screen and (max-width: 770px) {
    height: 60.1vw;
  }
`;

const ShadowEffect = styled.img`
  height: 101vw;
  position: absolute;
  top: 15vw;
  z-index: -2;
  @media screen and (max-width: 770px) {
    margin-top: 24vw;
  }
`;

const SliderBox = styled.div`
  padding-top: 26.5vw;
  display: flex;
  width: 100vw;

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const MobileSliderBox = styled.div`
  padding-top: 25vw;
  display: none;
  width: 100vw;

  @media screen and (max-width: 770px) {
    display: flex;
  }
`;

const SliderData = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

const Icon1 = styled.img`
  height: 7.5vw;
  padding: 0 3vw;
`;

const Icon2 = styled.img`
  height: 7.5vw;
  padding: 0 3vw;
`;

const IdentitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const IdentityP = styled.p`
  font-family: SDGothic;
  width: 54vw;
  line-height: 3vw;
  font-weight: 400;
  font-size: 1.3vw;
  padding-top: 25vw;
  text-align: center;
  @media screen and (max-width: 770px) {
    width: 78vw;
    font-size: 12px;
    line-height: 6vw;
  }
`;

const IdentityLine = styled.div`
  position: relative;
  top: 5vw;
  height: 17vw;
  border-left: 1px solid rgba(255, 255, 255, 0.6);
`;

const Star = styled.img`
  position: relative;
  top: 4vw;
  height: 1.4vw;
  @media screen and (max-width: 770px) {
    height: 4vw;
  }
`;

const CreditBox = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const ArtistSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 10vw;
  width: 90vw;
  @media screen and (max-width: 770px) {
    margin-top: 10vw;
  }
`;

const Heading = styled.h1`
  font-weight: 400;
  font-size: 3vw;
  font-family: SDGothic;
  @media screen and (max-width: 770px) {
    font-size: 18px;
  }
`;
const CreaterBox = styled.div`
  margin-top: 7vw;
  font-size: 1.2vw;
  text-align: center;
  font-family: SDGothic;
  word-spacing: 2.5vw;
  @media screen and (max-width: 770px) {
    font-size: 12px;
    word-spacing: 5.2vw;
  }
`;

const WebDesignSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 23vw;
  @media screen and (max-width: 770px) {
    padding-top: 20vw;
  }
`;

const WebDeveloperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 33vw;
  @media screen and (max-width: 770px) {
    padding-top: 20vw;
    height: 20vw;
  }
`;
