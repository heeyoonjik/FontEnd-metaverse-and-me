import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const BackToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBtn && (
        <Btn onClick={scrollUp}>
          <BtnImg src="/img/totop.png" />
        </Btn>
      )}
    </div>
  );
};

const Btn = styled.button`
  position: fixed;
  bottom: 2.604vw;
  right: 1.304vw;
  background: none;
  border: none;
  @media screen and (max-width: 770px) {
    bottom: 1.604vw;
    right: 6.04vw;
  }
`;

const BtnImg = styled.img`
  width: 5vw;
  @media screen and (max-width: 770px) {
    width: 17vw;
  }
`;
