import React, { useState } from "react";
import styled from "styled-components";
// import { NavHashLink } from "react-router-hash-link";
// import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const MotNav = () => {
  const [mobileNavShow, setMobileNavShow] = useState(false);
  const ChangeNav = () => {
    setMobileNavShow((now) => !now);
  };

  return (
    <HeaderBox how={mobileNavShow}>
      <HeaderNav how={mobileNavShow}>
        <UpperNav>
          <div className="Nav">
            <NavLink
              to="/Connected/MotionGraphic/Jjo"
              id="text"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              쪼
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/MotionGraphic/Han"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              환
            </NavLink>
          </div>

          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/MotionGraphic/Pixie"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              픽시
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/MotionGraphic/Ho"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              호
            </NavLink>
          </div>
        </UpperNav>
        <LowerNav>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/MotionGraphic/Kongi"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              콩이
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/MotionGraphic/Hyeon"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              현
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/MotionGraphic/Cannon"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              캐넌
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/MotionGraphic/Pyeong"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              평
            </NavLink>
          </div>
        </LowerNav>
      </HeaderNav>
    </HeaderBox>
  );
};

export default MotNav;

const HeaderBox = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 2.4vw;
  transition: background-color 0.3s ease-in-out 0s;

  .Nav {
    color: white;
    font-weight: 400;
    font-size: 1.2vw;
    /* border: 1px solid white;
    height: 2.6vw;
    width: 9.85vw;
    background-color: black; */
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 770px) {
      font-size: 4.5vw;
      position: relative;
      top: -34vw;
    }

    .on {
      background-color: #774bff;
    }
    .link {
      background-color: black;
    }

    :hover {
      background-color: #774bff;
    }

    #text {
      display: flex;
      justify-content: flex-start;
      color: white;
      border: 1px solid white;
      height: 2.4vw;
      width: 11.6vw;
      padding-top: 0.3vw;
      padding-left: 0.8vw;
      font-family: SDGothicBold;

      @media screen and (max-width: 770px) {
        justify-content: center;
        width: 23.6vw;
        height: 16.1vw;
        align-items: center;
      }

      :hover {
        background-color: #774bff;
      }
    }

    #guest {
      margin-right: 1.2vw;
      color: white;
    }
  }
`;

const HeaderNav = styled.div`
  display: flex;

  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
`;

const UpperNav = styled.div`
  display: flex;
`;

const LowerNav = styled.div`
  display: flex;
`;
