import { Caption, H2, } from "components";
import Link from "next/link";
import {
  TextSectionWrapper,
  RoundedNumber,
  TextDecorationWrapper,
  StyledWhiteH2,
  PointWrapper,
  StyledUnderline,
  StyledPlanet,
  StyledDesktopSMBR,
  StyledTabletBR,
  StyledDesktopBR,
} from "./intro-about-text-block.style";

export const IntroAboutTextBlock = ({...props}) => {
  return (
    <TextSectionWrapper {...props}>
      <H2>a color grading studio&nbsp;</H2>
      <StyledTabletBR />
      <H2>Based in&nbsp;</H2>
      <Link href="/">
        <StyledWhiteH2>Los Angeles, CALIFORNIA.&nbsp;</StyledWhiteH2>
      </Link>
      <StyledPlanet />
      <StyledDesktopBR />
      <StyledDesktopSMBR />
      <StyledTabletBR />
      <RoundedNumber>
        <Caption>01</Caption>
      </RoundedNumber>
      <StyledWhiteH2>&nbsp;We have personality.&nbsp;</StyledWhiteH2>
      <RoundedNumber>
        <Caption>02</Caption>
      </RoundedNumber>
      <StyledWhiteH2>&nbsp;We love&nbsp;</StyledWhiteH2>
      <StyledTabletBR />
      <StyledWhiteH2>What we do.</StyledWhiteH2>
      <StyledDesktopBR />
      <StyledDesktopSMBR />
      <RoundedNumber>
        <Caption>03</Caption>
      </RoundedNumber>
      <StyledWhiteH2>&nbsp;We make it fun for us and&nbsp;</StyledWhiteH2>
      <StyledTabletBR />
      <StyledWhiteH2> our clients.</StyledWhiteH2>
      <H2>That said,&nbsp;</H2>
      <StyledDesktopSMBR />
      <H2>we take&nbsp;</H2>
      <StyledDesktopBR />
      <H2>deadlines&nbsp;</H2>
      <StyledTabletBR />
      <H2> and&nbsp;</H2>
      <Link href="/">
        <TextDecorationWrapper>
          <StyledWhiteH2>agreements very seriously.</StyledWhiteH2>
          <StyledUnderline />
        </TextDecorationWrapper>
      </Link>
    </TextSectionWrapper>
  );
};
