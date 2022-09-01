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
  StyledTabletBR,
  StyledTabletSMBR,
  StyledCaptionPhoneBR,
  StyledCaptionBR,
  StyledPhoneBR,
  StyledPhoneMDBR,
  StyledPhoneSMBR,
  StyledDesktopLGBR,
} from "./intro-main-text-block.style";
import Link from "next/link";

export const IntroMainTextBlock = () => {
  return (
    <TextSectionWrapper>
      <FirstLineWrapper>
        <StyledWhiteH2>We are Color Department&nbsp;</StyledWhiteH2>
        <StyledPhoneBR />
        <H2>a color&nbsp;</H2>
        <StyledTabletBR />
        <StyledTabletSMBR />
        <StyledPhoneMDBR />
        <H2> grading studio&nbsp;</H2>
        <StyledDesktopLGBR />
        <StyledPhoneBR />
        <StyledWhiteH2>Based in Los Angeles.</StyledWhiteH2>
        <StyledPlanet />
        <StyledTabletBR />
        <StyledTabletSMBR />
        <StyledPhoneBR />
        <StyledPhoneMDBR />
        <StyledPhoneSMBR />
        <H2>&nbsp;We hunt for&nbsp;</H2>
        <H2>the best Solutions.&nbsp;</H2>
        <StyledDesktopLGBR />
        <StyledTabletSMBR />
        <StyledPhoneSMBR />
        <H2>We always&nbsp;</H2>
        <StyledTabletBR />
        <StyledPhoneMDBR />
        <H2> find the right</H2>&nbsp;
        <StyledDesktopBR />
        <H2>path to&nbsp;</H2>
        <StyledTabletSMBR />
        <StyledPhoneSMBR />
        <H2>cinematic&nbsp;</H2>
        <StyledDesktopLGBR />
        <StyledWhiteH2>Impactful&nbsp;</StyledWhiteH2>
        <StyledTabletBR />
        <StyledPhoneMDBR />
        <StyledWhiteH2>images.&nbsp;</StyledWhiteH2>
        <StyledPhoneSMBR />
        <Link href="/projects">
          <CaptionLink>
            <StyledLeftBracket />
            <Caption>&nbsp;projects&nbsp;</Caption>
            <StyledRightBracket />
          </CaptionLink>
        </Link>
        <StyledWhiteH2>&nbsp;Whatever the task is.</StyledWhiteH2>
      </FirstLineWrapper>
      <CaptionWrapper>
        <Caption>
          We have personality. We love what&nbsp;
          <StyledCaptionPhoneBR /> we do. We make it fun for us and our&nbsp;
          <StyledCaptionPhoneBR />
          clients.
          <StyledCaptionBR />
          That said, we take deadlines and&nbsp;
          <StyledCaptionPhoneBR /> agreements very seriously.
        </Caption>
      </CaptionWrapper>
      <TextWrapper>
        <Text style={{ opacity: 0.4 }}>
          With skills that go beyond
          <br />
          color grading, we have worked with
        </Text>
      </TextWrapper>
    </TextSectionWrapper>
  );
};
