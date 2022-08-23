import {
  propTypesMargin,
  propTypesPadding,
} from "../../types";
import { H2 } from "components";
import {
  AwardTextWrapper,
  StyledWhiteH2,
  StyledDesktopBR,
} from "./award-main-text-block.style";

export const AwardMainTextBlock = ({ ...props }) => {
  return (
    <AwardTextWrapper {...props}>
      <H2>We are agile and efficient. We do&nbsp;</H2>
      <StyledWhiteH2>beautiful work&nbsp;</StyledWhiteH2>
      <H2>without</H2>
      <H2>Wasting your time or money.</H2>
    </AwardTextWrapper>
  );
};

AwardMainTextBlock.propTypes = {
  propTypesMargin,
  propTypesPadding,
};
