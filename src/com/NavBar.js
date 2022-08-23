import React, { useState } from "react";
import styled from "styled-components";
// import { NavHashLink } from "react-router-hash-link";
// import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [mobileNavShow, setMobileNavShow] = useState(false);
  const ChangeNav = () => {
    setMobileNavShow((now) => !now);
  };

  let jbMedia = window.matchMedia("( min-width: 770px )");
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60 && jbMedia.matches === true) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <HeaderBox className={navbar ? "active" : "none"} how={mobileNavShow}>
        <HeaderNav how={mobileNavShow}>
          <div className="Nav">
            <NavLink
              to="/"
              id="text"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              Home
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/introduction"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              Introduction
            </NavLink>
          </div>

          <div className="Nav">
            <NavLink
              id="text"
              to="/I:dentity"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              I:dentity
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              id="text"
              to="/Connected"
              className={({ isActive }) => (isActive ? "on" : "link")}
              onClick={ChangeNav}
            >
              Connected
            </NavLink>
          </div>
          <div className="Nav">
            <NavLink
              to="/Guest"
              className={({ isActive }) => (isActive ? "on" : "link")}
              id="guest"
              onClick={ChangeNav}
            >
              Guest
            </NavLink>
          </div>
        </HeaderNav>
        <ToogleBtn1 to="#" onClick={ChangeNav} how={mobileNavShow}>
          <IoMenuOutline />
        </ToogleBtn1>
        <ToogleBtn2 to="#" onClick={ChangeNav} how={mobileNavShow}>
          <FiX />
        </ToogleBtn2>
        <Nothing src="/img/mobileNavBg.png" />
      </HeaderBox>
      <Outlet />
    </>
  );
};

export default NavBar;

const HeaderBox = styled.nav`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding-top: 1.7vw;
  padding-bottom: 1.7vw;
  z-index: 999;
  transition: background-color 0.3s ease-in-out 0s;
  .on {
    filter: blur(3px);
  }
  .Nav {
    margin: 0 2.5vw;
    color: white;
    font-weight: 400;
    font-size: 1.9vw;
  }
  .Nav:hover {
    filter: blur(3px);
  }

  #text {
    color: white;
  }
  #guest {
    margin-right: 1.2vw;
    color: white;
  }
  @media screen and (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: none;
    z-index: ${({ how }) => (how ? "999999999999999" : "99999")};
    .Nav {
      font-size: 5vh;
      padding: 6vw 0;
    }
    background-image: ${({ how }) =>
      how ? 'url("/img/mobileNavBg.png")' : "none"};
    background-color: ${({ how }) => (how ? "black" : "black")};
    height: ${({ how }) => (how ? "auto" : "18vw")};
  }
`;

const HeaderNav = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 770px) {
    display: ${({ how }) => (how ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

export const ToogleBtn1 = styled(Link)`
  position: absolute;
  right: 7vw;
  top: 6vw;
  font-size: 8.3vw;
  display: none;
  color: white;
  @media screen and (max-width: 770px) {
    display: ${({ how }) => (how ? "none" : "block")};
  }
`;

export const ToogleBtn2 = styled(Link)`
  position: absolute;
  right: 7vw;
  top: 8vw;
  font-size: 8vw;
  display: none;
  color: white;
  @media screen and (max-width: 770px) {
    display: ${({ how }) => (how ? "block" : "none")};
  }
`;

const Nothing = styled.img`
  display: none;
`;
