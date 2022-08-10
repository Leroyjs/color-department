import { Caption, H2, Text } from "components";
import { useEffect, useRef, useState } from "react";
import {
  TextSectionWrapper,
  FirstLineWrapper,
  SecondLineWrapper,
  ThirdLineWrapper,
  StyledWhiteH2,
} from "./intro-main-text-block.style";

export const IntroMainTextBlock = () => {
  return (
    <>
      <TextSectionWrapper>
        <FirstLineWrapper>
          <H2>We are Color Department</H2>
          <StyledWhiteH2>a color grading studio</StyledWhiteH2>
          <H2>Based in Los Angeles.</H2>
        </FirstLineWrapper>
        <SecondLineWrapper>
          <H2>We hunt for the best Solutions. We always find the right</H2>
        </SecondLineWrapper>
        <ThirdLineWrapper>
          <H2>path to cinematic</H2>
          <StyledWhiteH2>Impactful images.(</StyledWhiteH2>&nbsp;
          <Caption>projects</Caption>&nbsp;
          <H2>)Whatever the task is.</H2>
        </ThirdLineWrapper>
        <Caption>
          We have personality. We love what we do. We make it fun for us and our
          clients.
          <br />
          That said, we take deadlines and agreements very seriously.
        </Caption>
        <Text>
          With skills that go beyond
          <br />
          color grading, we have worked with
        </Text>
      </TextSectionWrapper>
    </>
  );
};
