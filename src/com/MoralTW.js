import React from "react";
import dummy from "../database/identityData.json";
import styled from "styled-components";
import { OTImgContainer } from "./OTImgContainer";
import { DWImgContainer } from "./DWImgContainer";

export const MoralTW = (props) => {
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
