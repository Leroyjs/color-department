import { Caption, H2, Text,} from "components";
import { TextSectionWrapper } from "./about-end-text-block.style";

export const AboutEndTextBlock = () => {
  return (
    <TextSectionWrapper>
      <Caption mt="xlg" mb="md" color="white">
        a color grading studio based in los angeles, california.
      </Caption>
      <H2>
        We have personality. We love What we do.
        <br />
        We make it fun for us and our clients. That said, we take
        <br />
        deadlines and agreements very seriously.
      </H2>
      <Text mt="md" color="white" mb="xlg">
        Miranda Bell is a highly versatile senior colourist working broadly
        across
        <br /> advertising, narrative, music and fashion. Nike, Louis Vuitton,
        Mercedes, Virgin
        <br /> Media, ASOS, Sainsbury’s, Balenciaga and Calvin Klein all feature
        in his varied
        <br /> commercial portfolio. Throughout every grade, he prioritises
        enhancing the
        <br /> message and emotion of the work.
      </Text>
    </TextSectionWrapper>
  );
};
