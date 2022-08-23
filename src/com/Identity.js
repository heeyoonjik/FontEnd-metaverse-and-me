import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IntroductionHeading } from "./motiongraphic/Jjo";
import dummy from "../database/identityData.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Identity = () => {
  const [nameId, setnameId] = useState();

  const [testValue, setTestValue] = useState();

 
  const [openModal, setOpenModal] = useState(false);
  const ChangeModalValue = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <TotalInner>
      <Modal
        ChangeModalValue={ChangeModalValue}
        nameId={nameId}
        openModal={openModal}
        testValue={testValue}
        setTestValue={setTestValue}
      />
      <IntroductionHeading>I:DENTITY </IntroductionHeading>
      <DivBlock>
        <First
          imgurl="/img/identity/jisu.png"
          chracterName="픽시"
          realName="강지수"
          intro="이름을 따왔다. 야망 넘치는 픽시의 꿈은 
        우주정복이다. 장난이 많아 평소에는..."
          mobileintro="이름을 따왔다. 야망 넘치는 픽시의 꿈은 
        우주정복이다. 장난이 많아 평소에는..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="1"
        />
        <First
    
          imgurl="/img/identity/권예지-2.png"
          chracterName="환"
          realName="권예지"
          intro="강한 열정을 가졌다 하여 불꽃 ‘환’의 한자를 
          따온 이름이다. 하지만 열정적인 행동을 ..."
          mobileintro="강한 열정을 가졌다 하여 불꽃 ‘환’의 한자를 
          따온 이름이다. 하지만 열정적인 ... "
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="2"
        />
        <First
          imgurl="img/identity/김경은-2.png"
          chracterName="SEIN(세인)"
          realName="김경은"
          intro="존재[有]의 의미의 이름을 가진 SEIN. 
          유독 매혹적인 눈을 가져 사람을 쉽게 홀린다...  "
          mobileintro="존재[有]의 의미의 이름을 가진 SEIN. 
          유독 매혹적인 눈을 가져 사람을 쉽게 ...  "
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="3"
        />
        <First
          imgurl="img/identity/김나은-2.png"
          chracterName="메타"
          realName="김나은"
          intro="메타버스주제를 가지고 만든 캐릭터라 이름을 
          메타로 지었습니다. 메타는 이곳 저곳을...  "
          mobileintro="메타버스주제를 가지고 만든 캐릭터라 이름을 
          메타로 지었습니다 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="4"
        />
        <First
          imgurl="img/identity/한유진.png"
          chracterName="제트"
          realName="한유진"
          intro="제트는 실제의 나와는 다른 특징을 띠는 캐릭터다. 실행력이 빠르고, 호기심이 많아...  "
          mobileintro="제트는 실제의 나와는 다른 특징을 띠는 캐릭터다. 실행력이 빠르고, 호기심이 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="5"
        />
        <First
          imgurl="img/identity/김미정-2.png"
          chracterName="이젤"
          realName="김미정"
          intro="이젤이라는 이름의 의미는 별이라는 의미를 담고 있습니다. 이런 의미를 캐릭터가...  "
          mobileintro="이젤이라는 이름의 의미는 별이라는 의미를 담고 있습니다. 이런 의미를 캐릭터 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="6"
        />
        <First
          imgurl="img/identity/김자연.png"
          chracterName="Bonnie"
          realName="김자연"
          intro="‘Bonnie’는 ‘Bonnie and Clyde’에서 영감을 받아 따온 이름이다. 은은한 광기를 머금고...  "
          mobileintro="‘Bonnie’는 ‘Bonnie and Clyde’에서 영감을 받아 따온 이름이다. 은은한 광기 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="7"
        />
        <First
          imgurl="img/identity/김현지-2.png"
          chracterName="현"
          realName="김현지"
          intro="현은 무한한 발전을 하게 해 주는 기술과 미래만을 향해 달려가는  세상 속에서...  "
          mobileintro="현은 무한한 발전을 하게 해 주는 기술과 미래만을 향해 달려가는  세상 속에서... "
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="8"
        />{" "}
        <First
          imgurl="img/identity/기한나.png"
          chracterName="버피"
          realName="기한나"
          intro="버피는 메타버스라는 가상의 세계 안에서 여러 가지 공간으로 이동하는 것을 좋아하며... "
          mobileintro="버피는 메타버스라는 가상의 세계 안에서 여러 가지 공간으로 이동하는 것을 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="9"
        />
        <First
          imgurl="img/identity/박도은-2.png"
          chracterName="도미"
          realName="박도은"
          intro="도이는 실제 제 이름이 될 수 있었으며 , ‘가상공간의 또다른 저’인 만큼 ...  "
          mobileintro="도이는 실제 제 이름이 될 수 있었으며 , ‘가상공간의 또다른 저’인 만큼 ... "
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="10"
        />{" "}
        <First
          imgurl="img/identity/박진영-2.png"
          chracterName="와피"
          realName="박진영"
          intro="자연의 몽상가, 와피는 내 이름에서 유래된 또다른 저의 온라인 별칭 와피를 이름으로... "
          mobileintro="자연의 몽상가, 와피는 내 이름에서 유래된 또다른 저의 온라인 별칭 와피를 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="11"
        />
        <First
          imgurl="img/identity/조용욱-2.png"
          chracterName="쪼"
          realName="조용욱"
          intro="우주비행사 쪼는 섬세하고 감각적이며, 밝고 
          따듯한 마음을 지닌 5살 꼬마입니다... "
          mobileintro="우주비행사 쪼는 섬세하고 감각적이며, 밝고 
          따듯한 마음을 지닌 5살 꼬마 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="12"
        />{" "}
        <First
          imgurl="img/identity/신민경-2.png"
          chracterName="화린(華粼)"
          realName="신민경"
          intro="‘화린’은 실제 내 이름이 될 뻔했던 이름으로, 이름의 뜻이 내가 추구하는 바와 비슷하여... "
          mobileintro="‘화린’은 실제 내 이름이 될 뻔했던 이름으로, 이름의 뜻이 내가 추구하는 바와 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="13"
        />
        <First
          imgurl="img/identity/안예빈-2.png"
          chracterName="평"
          realName="안예빈"
          intro="사이버펑크 세계관 속 조선
          신분의 고하는 구시대적 악습으로 사라진지 오래다..."
          mobileintro="사이버펑크 세계관 속 조선
          신분의 고하는 구시대적 악습으로 사라진지 오래다..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="14"
        />{" "}
        <First
          imgurl="img/identity/이우진-2.png"
          chracterName="다피"
          realName="이우진"
          intro="'다피'는 실제 내가 고등학교 때 이름처럼 불렸던 별명으로 현재 나의 모든 닉네임을 담당하고 있어..."
          mobileintro="'다피'는 실제 내가 고등학교 때 이름처럼 불렸던 별명으로 현재 나의 모든 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="15"
        />
        <First
          imgurl="img/identity/이채린-2.png"
          chracterName="캐넌"
          realName="이채린"
          intro="사람들 사이에서 분위기와 생각 뿐만 아니라 다양한 것들을 읽어내는 스캐너 'scanner’..."
          mobileintro="사람들 사이에서 분위기와 생각 뿐만 아니라 다양한 것..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="16"
        />{" "}
        <First
          imgurl="img/identity/최정원-2.png"
          chracterName="원더가든"
          realName="최정원"
          intro="팔을 뻗으면 어디든 닿을것같은 그녀는 기회가 있으면 어떻게든 잡으려한다..."
          mobileintro="팔을 뻗으면 어디든 닿을것같은 그녀는 기회가 있으면 어떻게든 잡으려한다 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="17"
        />
        <First
          imgurl="img/identity/곽우진-2.png"
          chracterName="콩이"
          realName="곽우진"
          intro="호기심이 많지만 무서운 것도 많은 콩이는 자기가 되고 싶은 멋진 공룡로봇을 타고... "
          mobileintro="호기심이 많지만 무서운 것도 많은 콩이는 자기가 되고 싶은 멋진 공룡로봇을 타고 ... "
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="18"
        />{" "}
        <First
          imgurl="img/identity/박지현-2.png"
          chracterName="젼"
          realName="박지현"
          intro="젼은 실제 내 이름을 부르기 쉽게 바꾼 별명이다. 이곳에서 젼은 자유롭게 자신이... "
          mobileintro="젼은 실제 내 이름을 부르기 쉽게 바꾼 별명이다. 이곳에서 젼은 자유롭게 자신이 ... "
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="19"
        />
        <First
          imgurl="img/identity/송지윤-2.png"
          chracterName="로아"
          realName="송지윤"
          intro="성낼 로, 나 아 한자를 쓴 이 캐릭터의 이름은 로아이다. ‘성내는 나’라는 뜻으로... "
          mobileintro="성낼 로, 나 아 한자를 쓴 이 캐릭터의 이름은 로아이다. ‘성내는 나’라는 뜻으로 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="20"
        />{" "}
        <First
          imgurl="img/identity/최성경-2.png"
          chracterName="줄리"
          realName="최성경"
          intro="줄리는 무한의 힘을 가진 존재이다. 때로는 밝은 웃음이 누군가에게 기분좋은..."
          mobileintro="줄리는 무한의 힘을 가진 존재이다. 때로는 밝은 웃음이 누군가에게 기분좋은 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="21"
        />
        <First
          imgurl="img/identity/박규리-2.png"
          chracterName="호(虎)"
          realName="박규리"
          intro="한자 범 호(虎) 자를 사용하는 이름이다. 호랑이의 용맹함과 그만이 가지고 있는..."
          mobileintro="한자 범 호(虎) 자를 사용하는 이름이다. 호랑이의 용맹함과 그만이 가지고 있는 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="22"
        />{" "}
        <First
          imgurl="img/identity/최이선-2.png"
          chracterName="캐스퍼"
          realName="최이선"
          intro="캐스퍼는 라틴어 KASPER에서 따왔다. 부와 명예를 관리하는 사람을 말한다..."
          mobileintro="캐스퍼는 라틴어 KASPER에서 따왔다. 부와 명예를 관리하는 사람을 말한다 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="23"
        />
        <First
          imgurl="img/identity/김재욱-2.png"
          chracterName="우기"
          realName="김재욱"
          intro="여러가지 만능 재주꾼. 창조해내는 것을 좋아하는 친구이다. 무언가를 만들어내는 것은 언제나 설레고..."
          mobileintro="여러가지 만능 재주꾼. 창조해내는 것을 좋아하는 친구이다. 무언가를 만들어 ..."
          ChangeModalValue={ChangeModalValue}
          setnameId={setnameId}
          setTestValue={setTestValue}
          idValue="24"
        />
      </DivBlock>
      <IdentityFoter>
        <FooterLogo src="img/activelogo.png" />
      </IdentityFoter>
    </TotalInner>
  );
};

export default Identity;

const TotalInner = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;
const IdentityFoter = styled.div`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    width: 100vw;
    height: 6vh;
    box-shadow: 0 0 20px 20px black;
    position: fixed;
    background-color: black;
    bottom: 0vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FooterLogo = styled.img`
  margin-bottom: 5.128vw;
`;

const DivBlock = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(8, 41.36vw);
  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 51vw);
    padding-bottom: 20vw;
  }
`;

const Characterbox = styled.div`
  width: 33.3vw;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid white;
  @media screen and (max-width: 770px) {
    width: 50.4vw;
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
    height: 29vw;
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
`;

const ChracterName = styled.p`
  margin-left: 1vw;
  font-size: 2vw;
  @media screen and (max-width: 770px) {
    font-size: 3.7vw;
  }
`;

const RealName = styled.div`
  display: flex;
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
  margin: 1vw 1vw;
  line-height: 2.1vw;
  text-overflow: ellipsis;

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

const First = ({
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
  const IdNum = parseInt(idValue);
  function sendIdValue() {
    setnameId(IdNum);
  }
  const OTsrc = dummy.ots.filter((ots) => ots.img === IdNum);
  const sibal = OTsrc.map((e) => e.tasksrc);
  return (
    <Characterbox>
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

const Modal = (props) => {
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

const MoralTW = (props) => {
  const OTsrc = dummy.ots.filter((ots) => ots.id === props.idValue);
  const DWsrc = dummy.dws.filter((dws) => dws.id === props.idValue);

  return (
    <MoralInner>
      <TWBox>
        <TWHeading>Other Tasks</TWHeading>
        <TWImgFlexDiv>
          {OTsrc.map((e) => (
            <OTImgContainer
              srcValue={e.tasksrc}
              setTestValue={props.setTestValue}
              key={e.img}
            />
          ))}
        </TWImgFlexDiv>
      </TWBox>
      <TWBox>
        <TWHeading>Daily works</TWHeading>
        <TWImgFlexDiv>
          {DWsrc.map((e) => (
            <DWImgContainer
              srcValue={e.tasksrc}
              setTestValue={props.setTestValue}
              key={e.img}
            />
          ))}
        </TWImgFlexDiv>
      </TWBox>
    </MoralInner>
  );
};
const MoralInner = styled.div`
  display: flex;
  @media screen and (max-width: 770px) {
    width: 83.333vw;
    flex-direction: column;
    /* margin-left: 5.897vw; */
    padding-bottom: 65vw;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const TWBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.292vw;
  margin-top: 1.41vw;
  @media screen and (max-width: 770px) {
    padding: 0 5.897vw;
    margin-top: 5.897vw;
  }
`;

const TWHeading = styled.h1`
  font-size: 1.25vw;
  font-weight: 500;
  color: black;
  @media screen and (max-width: 770px) {
    font-size: 4.615vw;
  }
`;

const TWImgFlexDiv = styled.div`
  display: flex;
  margin-top: 1.41vw;
`;

const TWImgBox = styled.div`
  width: 4.688vw;
  height: 4.688vw;
  margin-right: 1.146vw;
  background-color: black;
  cursor: pointer;

  @media screen and (max-width: 770px) {
    width: 16.41vw;
    height: 16.41vw;
  }
`;
const TWIMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const OTImgContainer = ({ srcValue, setTestValue }) => {
  const TestF = () => {
    setTestValue(srcValue);
  };
  return (
    <TWImgBox>
      <TWIMG src={srcValue} onClick={TestF} />
    </TWImgBox>
  );
};

const DWImgContainer = ({ srcValue, setTestValue }) => {
  const TestF = () => {
    setTestValue(srcValue);
  };

  return (
    <TWImgBox>
      <TWIMG src={srcValue} onClick={TestF} />
    </TWImgBox>
  );
};
