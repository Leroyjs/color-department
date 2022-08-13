import { Caption, H2 } from "components";
import {
  TextSectionWrapper,
  MapLink,
  RoundedNumber,
  TextDecorationWrapper,
  StyledWhiteH2,
  PointWrapper,
} from "./intro-about-text-block.style";
import Link from "next/link";

export const IntroAboutTextBlock = () => {
  return (
    <TextSectionWrapper>
      <H2>a color grading studio Based in </H2>
      <Link href="/">
        <StyledWhiteH2>Los Angeles, CALIFORNIA.</StyledWhiteH2>
      </Link>
      <svg width="60" height="60" viewBox="0 0 62 62" fill="none">
        <path
          d="M31 61C31 61 46.4054 55.6767 46.4054 31C46.4054 6.32335 31 1 31 1M31 61C31 61 15.5946 55.6767 15.5946 31C15.5946 6.32335 31 1 31 1M31 61C47.5685 61 61 47.5685 61 31M31 61C14.4315 61 1 47.5685 1 31M31 61V1M31 1C14.4315 1 1 14.4315 1 31M31 1C47.5685 1 61 14.4315 61 31M61 31H1"
          stroke="white"
          stroke-width="2"
        />
      </svg>
      <PointWrapper>
        <RoundedNumber>
          <Caption>01</Caption>
        </RoundedNumber>
        <StyledWhiteH2>We have personality.</StyledWhiteH2>
      </PointWrapper>
      <PointWrapper>
        <RoundedNumber>
          <Caption>01</Caption>
        </RoundedNumber>
        <StyledWhiteH2>We love What we do.</StyledWhiteH2>
      </PointWrapper>
      <PointWrapper>
        <RoundedNumber>
          <Caption>01</Caption>
        </RoundedNumber>
        <StyledWhiteH2>We make it fun for us and our clients.</StyledWhiteH2>
      </PointWrapper>
      <H2>That said, we take deadlines and</H2>
      <Link href="/">
        <TextDecorationWrapper>
          <StyledWhiteH2>agreements very seriously.</StyledWhiteH2>
          <svg
            width="580"
            height="16"
            viewBox="0 0 572 17"
            fill="none"
          >
            <path
              d="M1 0V8C1 12.4183 4.58173 16 9.00001 16H563C567.418 16 571 12.4183 571 8V0"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </TextDecorationWrapper>
      </Link>
    </TextSectionWrapper>
  );
};
