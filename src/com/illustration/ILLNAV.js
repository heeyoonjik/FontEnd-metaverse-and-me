import React, { useState } from "react";
import styled from "styled-components";
// import { NavHashLink } from "react-router-hash-link";
// import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const ILLNAV = () => {
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
              to="/Connected/ILLUSTRATION/burpee"
              id="text"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              버피
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/ILLUSTRATION/meta"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              메타
            </NavLink>
          </div>

          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/ILLUSTRATION/easel"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              이젤
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/ILLUSTRATION/sein"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              세인
            </NavLink>
          </div>

          <div className="Nav">
            <NavLink
              to="/Connected/ILLUSTRATION/WinderGarden"
              className={({ isActive }) => (isActive ? "on" : "link")}
              id="text"
              onClick={ChangeNav}
            >
              원더가든
            </NavLink>
          </div>
        </UpperNav>
        <LowerNav>
          <div className="Nav">
            <NavLink
              to="/Connected/ILLUSTRATION/Doi"
              className={({ isActive }) => (isActive ? "on" : "link")}
              id="text"
              onClick={ChangeNav}
            >
              도이
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              to="/Connected/ILLUSTRATION/wafi"
              className={({ isActive }) => (isActive ? "on" : "link")}
              id="text"
              onClick={ChangeNav}
            >
              와피
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              to="/Connected/ILLUSTRATION/Daffy"
              className={({ isActive }) => (isActive ? "on" : "link")}
              id="text"
              onClick={ChangeNav}
            >
              다피
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              to="/Connected/ILLUSTRATION/Casper"
              className={({ isActive }) => (isActive ? "on" : "link")}
              id="text"
              onClick={ChangeNav}
            >
              캐스퍼
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              to="/Connected/ILLUSTRATION/Z"
              className={({ isActive }) => (isActive ? "on" : "link")}
              id="text"
              onClick={ChangeNav}
            >
              제트
            </NavLink>
          </div>
        </LowerNav>
      </HeaderNav>
    </HeaderBox>
  );
};

export default ILLNAV;

const HeaderBox = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  z-index: 200;
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
      top: -33vw;
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
      font-family: SDGothic;
      color: white;
      border: 1px solid white;
      height: 2.4vw;
      width: 9.1vw;
      padding-left: 0.8vw;
      padding-top: 0.3vw;
      font-family: SDGothicBold;
      @media screen and (max-width: 770px) {
        justify-content: center;
        width: 19.4vw;
        height: 16.1vw;
        align-items: center;
        padding-left: 0vw;
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
