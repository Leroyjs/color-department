import { FoxBoxWrapper, ImageStyled, ImageWrapper } from "./preloader.style";
import {
  fox11,
  fox12,
  fox13,
  fox14,
  fox21,
  fox22,
  fox23,
  fox24,
  fox33,
} from "assets/icons";

import Image from "next/image";

export const FoxBox = ({ stepIndex }) => (
  <FoxBoxWrapper>
    <ImageWrapper step={stepIndex} gridArea="1/1">
      <Image src={fox11} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="1/2">
      <Image src={fox12} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="1/3">
      <Image src={fox13} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="1/4">
      <Image src={fox14} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="2/1">
      <Image src={fox21} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="2/2">
      <Image src={fox22} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="2/3">
      <Image src={fox23} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="2/4">
      <Image src={fox24} alt="" />
    </ImageWrapper>
    <ImageWrapper step={stepIndex} gridArea="3/3">
      <Image src={fox33} alt="" />
    </ImageWrapper>
  </FoxBoxWrapper>
);
