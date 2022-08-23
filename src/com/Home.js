import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <Inner>
      <VideoBg
        src="/img/motioncom.mp4"
        autoPlay={true}
        loop
        muted
        playsInline
        id="section1"
      />
      <MobileVideoBg
        src="/img/motionapp2.mp4"
        autoPlay={true}
        loop
        muted
        playsInline
        id="section1"
      />

      <Footer
      // data-aos="fade-up"
      >
        <Active src="img/active.png" />
        <FooterP>
          VISUAL DESIGN EXHIBITION 2022 I:METAVERSE AND ME
          <br />
          <Anchor href="https://www.instagram.com/active_mju/" target="_blank">
            @active_mju
          </Anchor>
        </FooterP>
      </Footer>
      <MobileFooter data-aos="fade-up">
        <Active src="img/active.png" />
        <FooterP>
          VISUAL DESIGN EXHIBITION 2022 I:METAVERSE AND ME
          <br />
          <Anchor href="https://www.instagram.com/active_mju/" target="_blank">
            @active_mju
          </Anchor>
        </FooterP>
      </MobileFooter>
      {/* <FooterBg /> */}
    </Inner>
  );
};

export default Home;

const Inner = styled.div`
  width: 100vw;

  z-index: 2;
`;

const VideoBg = styled.video`
  width: 100%;
  object-fit: contain;
  z-index: 100;
  display: block;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const MobileVideoBg = styled.video`
  width: 100%;
  object-fit: contain;
  z-index: 100;
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
  }
`;

const Footer = styled.footer`
  background-image: url("img/footer.jpg");
  background-size: contain;
  width: 100vw;
  height: 24vw;
  margin-left: -0.37vw;
  z-index: 2;
  top: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const MobileFooter = styled.footer`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    position: relative;
    width: 100vw;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: -34vw;
    height: 0;
  }
`;

// const FooterBg = styled.div`
//   background-image: url("img/footer.jpg");
//   background-size: cover;
//   width: 100vw;
//   height: 23.81vw;
//   position: absolute;
//   top: 37.7vw;
//   z-index: -10;
//   right: 0.36vw;
//   @media screen and (max-width: 770px) {
//     display: none;
//   }
// `;

const Active = styled.img`
  width: 17vw;
  margin-bottom: 3.3vw;
  margin-top: 2vw;
`;

const FooterP = styled.p`
  font-weight: 400;
  font-size: 1.8vw;
  text-align: center;
`;
const Anchor = styled.a`
  color: white;
  z-index: 1000;
`;
