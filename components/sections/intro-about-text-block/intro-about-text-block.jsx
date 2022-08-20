import { Caption, H2, Planet } from "components";
import Link from "next/link";
import {
  TextSectionWrapper,
  RoundedNumber,
  TextDecorationWrapper,
  StyledWhiteH2,
  PointWrapper,
  StyledUnderline,
} from "./intro-about-text-block.style";

export const IntroAboutTextBlock = ({...props}) => {
  return (
    <TextSectionWrapper {...props}>
      <H2>a color grading studio Based in </H2>
      <Link href="/">
        <StyledWhiteH2>&nbsp;Los Angeles, CALIFORNIA.</StyledWhiteH2>
      </Link>
      <Planet />
      <PointWrapper>
        <RoundedNumber>
          <Caption>01</Caption>
        </RoundedNumber>
        <StyledWhiteH2>We have personality.&nbsp;</StyledWhiteH2>
      </PointWrapper>
      <PointWrapper>
        <RoundedNumber>
          <Caption>02</Caption>
        </RoundedNumber>
        <StyledWhiteH2>We love What we do.</StyledWhiteH2>
      </PointWrapper>
      <PointWrapper>
        <RoundedNumber>
          <Caption>03</Caption>
        </RoundedNumber>
        <StyledWhiteH2>We make it fun for us and our clients.</StyledWhiteH2>
      </PointWrapper>
      <H2>That said, we take</H2>
      <H2>deadlines and&nbsp;</H2>
      <Link href="/">
        <TextDecorationWrapper>
          <StyledWhiteH2>agreements very seriously.</StyledWhiteH2>
          <StyledUnderline />
        </TextDecorationWrapper>
      </Link>
    </TextSectionWrapper>
  );
};
