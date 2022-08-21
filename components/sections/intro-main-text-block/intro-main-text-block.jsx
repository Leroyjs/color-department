import { Caption, H2, Text, } from "components";
import {
  TextSectionWrapper,
  FirstLineWrapper,
  StyledWhiteH2,
  TextWrapper,
  CaptionWrapper,
  CaptionLink,
  StyledPlanet,
  StyledLeftBracket,
  StyledRightBracket,
  StyledDesktopBR,
  StyledDesktopSM,
  StyledTabletBR,
} from "./intro-main-text-block.style";
import Link from "next/link";

export const IntroMainTextBlock = () => {
  return (
    <TextSectionWrapper>
      <FirstLineWrapper>
        <StyledWhiteH2>We are Color Department</StyledWhiteH2>&nbsp;
        <H2>a color</H2>&nbsp;
        <StyledDesktopSM />
        <H2> grading studio&nbsp;</H2>
        <StyledWhiteH2>
          Based in Los Angeles.
          <StyledPlanet />
        </StyledWhiteH2>
        &nbsp;
        <StyledDesktopSM />
        <H2>We hunt for the best Solutions.</H2>
        &nbsp;
        <H2>We always</H2>
        &nbsp;
        <StyledDesktopSM />
        <H2> find the right</H2>&nbsp;
        <StyledDesktopBR />
        <H2>path to cinematic&nbsp;</H2>
        <StyledWhiteH2>Impactful </StyledWhiteH2>
        &nbsp;
        <StyledDesktopSM />
        <StyledWhiteH2>images.</StyledWhiteH2>
        &nbsp;
        <Link href="/">
          <CaptionLink>
            <StyledLeftBracket />
            <Caption>&nbsp;projects&nbsp;</Caption>
            <StyledRightBracket />
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
        <Text style={{ opacity: 0.4 }}>
          With skills that go beyond
          <br/>
          color grading, we have worked with
        </Text>
      </TextWrapper>
    </TextSectionWrapper>
  );
};
