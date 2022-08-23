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
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
`;

const BtnImg = styled.img``;
