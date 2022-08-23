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
  right: 2.604vw;
  width: 2.604vw;
  height: 2.604vw;
  background: none;
  border: none;
`;

const BtnImg = styled.img``;
