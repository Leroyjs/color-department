import { Caption, H2, Text } from "components";
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
        <H2>We are Color Department</H2>&nbsp;
        <StyledWhiteH2>a color grading studio</StyledWhiteH2>&nbsp;
        <H2>Based in Los Angeles.</H2>&nbsp;
        <H2>We hunt for the best Solutions. We always find the right</H2>&nbsp;
        <H2>path to cinematic</H2>
        <StyledWhiteH2>Impactful images.</StyledWhiteH2>&nbsp;
        <Link href="/">
          <CaptionLink>
            <svg
              width="10"
              height="60"
              viewBox="0 0 12 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 61C11 61 1 47.5685 1 31C1 14.4315 11 1 11 1"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <Caption>projects</Caption>
            <svg
              width="10"
              height="60"
              viewBox="0 0 12 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 61C1 61 11 47.5685 11 31C11 14.4315 1 1 1 1"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </CaptionLink>
        </Link>
        &nbsp;
        <H2>Whatever the task is.</H2>
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
