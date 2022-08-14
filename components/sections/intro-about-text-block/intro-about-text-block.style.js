import {
  applyMargins,
  getCurrentColor,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentBackgroundColorStyles,
} from "styles";
import styled from "@emotion/styled";
import { H2 } from "components";
import { TextDecorationUnderline } from "components/common";

export const TextSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${getCurrentPaddingStyle("vertical", "xlg")};
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  width: 100%;

  h2 {
    display: inline-block;
    margin: 0;
  }
`;

export const MapLink = styled.div`
  display: inline-block;
`;

export const PointWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RoundedNumber = styled.div`
  width: 58px;
  height: 58px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  flex: 0 0 auto;
  border-radius: 50%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  border: 1px solid ${getCurrentColor("white")};
  margin: 0;
  ${getCurrentMarginStyle("right", "xxsm")};
  span {
    color: ${getCurrentColor("white")};
    align-self: center;
  }
`;

export const TextDecorationWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const StyledWhiteH2 = styled(H2)`
  color: ${getCurrentColor("white")};
`;

export const StyledUnderline = styled(TextDecorationUnderline)`
  position: absolute;
  bottom: -16px;
  left: 50%;
  right: 0;
  transform: translateX(-50%);
  width: calc(100% + 6px);
`;