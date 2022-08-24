import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IntroductionHeading } from "./motiongraphic/Jjo";
import AOS from "aos";
import "aos/dist/aos.css";
import { First } from "./first";
import { Modal } from "./modal";

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
          intro="장난끼가 많은 성격이 신화 속 요정인 픽시와 닮아 이름을 따왔다. 야망 넘치는 픽시의 꿈은 우주정복..."
          mobileintro="장난끼가 많은 성격이 신화 속 요정인 픽시와 닮아 이름을 따왔다. 야망 넘치는 픽시의 꿈은 우주정복..."
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
  @media screen and (max-width: 770px) {
    /* overflow-x: hidden;
    min-width: 100vw; */
  }
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
const DivBlock = styled.div`
  display: grid;
  width: 100vw;
  place-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(8, 41.36vw);
  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 51vw);
    padding-bottom: 20vw;
  }
`;
const FooterLogo = styled.img`
  margin-bottom: 5.128vw;
`;
