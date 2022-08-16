import { Caption, H2, Text, LeftBracket, RightBracket, Planet } from "components";
import {
  TextSectionWrapper,
  FirstLineWrapper,
  StyledWhiteH2,
  TextWrapper,
  CaptionWrapper,
  CaptionLink,
} from "./intro-main-text-block.style";
import Link from "next/link";

export const IntroMainTextBlock = () => {
  return (
    <TextSectionWrapper>
      <FirstLineWrapper>
        <StyledWhiteH2>We are Color Department</StyledWhiteH2>&nbsp;
        <H2>a color grading studio&nbsp;</H2>
        <StyledWhiteH2>
          Based in Los Angeles.
          <Planet />
        </StyledWhiteH2>
        <H2>We hunt for the best Solutions. We always find the right</H2>
        <br />
        <H2>path to cinematic&nbsp;</H2>
        <StyledWhiteH2>Impactful images.&nbsp;</StyledWhiteH2>
        <Link href="/">
          <CaptionLink>
            <LeftBracket />
            <Caption>&nbsp;projects&nbsp;</Caption>
            <RightBracket />
          </CaptionLink>
        </Link>
        &nbsp;
        <StyledWhiteH2>&nbsp;Whatever the task is.</StyledWhiteH2>
      </FirstLineWrapper>
      <CaptionWrapper>
        <Caption>
          We have personality. We love what we do. We make it fun for us and our
          clients.
          <br />
          That said, we take deadlines and agreements very seriously.
        </Caption>
      </CaptionWrapper>
      <TextWrapper>
        <Text>
          With skills that go beyond
          <br />
          color grading, we have worked with
        </Text>
      </TextWrapper>
    </TextSectionWrapper>
  );
};
