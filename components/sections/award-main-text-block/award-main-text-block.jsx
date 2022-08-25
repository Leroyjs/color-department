import {
  propTypesMargin,
  propTypesPadding,
} from "../../types";
import { H2 } from "components";
import { AwardTextWrapper, StyledWhiteH2, StyledDesktopBR, StyledTabletBR, StyledDesktopSMBR } from "./award-main-text-block.style";

export const AwardMainTextBlock = ({ ...props }) => {
  return (
    <AwardTextWrapper {...props} mb="xlg">
      <H2>We are agile and efficient.&nbsp;</H2>
      <StyledTabletBR />
      <H2>We do&nbsp;</H2>
      <StyledWhiteH2>beautiful work&nbsp;</StyledWhiteH2>
      <StyledDesktopSMBR />
      <H2>without&nbsp;</H2>
      <StyledDesktopBR />
      <H2>Wasting&nbsp;</H2>
      <StyledTabletBR />
      <H2>your time or money.</H2>
    </AwardTextWrapper>
  );
};

AwardMainTextBlock.propTypes = {
  propTypesMargin,
  propTypesPadding,
};
