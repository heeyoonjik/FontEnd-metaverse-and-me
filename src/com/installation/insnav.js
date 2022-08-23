import React, { useState } from "react";
import styled from "styled-components";
// import { NavHashLink } from "react-router-hash-link";
// import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const INSNAV = () => {
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
              to="/Connected/INSTALLATION/DoiBonnie"
              id="text"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              도이 / Bonnie
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/INSTALLATION/JulieHwarin"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              줄리 / 화린
            </NavLink>
          </div>
        </UpperNav>
        <LowerNav>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/INSTALLATION/loaJyeon"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              로아 / 젼
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected/INSTALLATION/CannonWonderGarden"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              캐넌 / 원더가든
            </NavLink>
          </div>
        </LowerNav>
      </HeaderNav>
    </HeaderBox>
  );
};

export default INSNAV;

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
      width: 24.9vw;
      padding-top: 0.3vw;
      padding-left: 0.8vw;
      font-family: SDGothicBold;

      @media screen and (max-width: 770px) {
        justify-content: center;
        width: 48.5vw;
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
