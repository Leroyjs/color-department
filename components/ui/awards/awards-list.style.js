import {
  applyMargins,
  applyPaddings,
  colors,
  fontFamilies,
  getCurrentBackgroundColorStyles,
  getCurrentColorStyles,
  getCurrentFontSizeStyle,
  hexToRGBA,
} from "styles";

// import { H2 } from "../h2";
import styled from "@emotion/styled";
import { H2, Caption } from "components";

export const AwardsContainer = styled.div`
  display: block;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const AwardsTitle = styled(H2)`
  display: inline-block;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  ${applyMargins}
  ${applyPaddings}
`;

export const AwardsSubTitle = styled(Caption)`
  display: inline-block;
  text-transform: uppercase;
  text-align: left;

  /* ${applyMargins}
  ${applyPaddings} */
`;

export const ListStyled = styled.ul`
  display: block;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const LabelStart = styled.span`
  ${({ theme }) => getCurrentColorStyles("white", theme)}

  pointer-events: none;
  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 100%;
  text-transform: uppercase;
  ${getCurrentFontSizeStyle("h3")};
  transition: color 0.3s;
`;

export const LabelEnd = styled.span`
  color: ${hexToRGBA(colors.white, 0.2)};

  pointer-events: none;
  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 100%;
  text-transform: uppercase;
  ${getCurrentFontSizeStyle("h3")};
  transition: color 0.3s;
`;

export const PopOver = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 400px;
  height: 0px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border: none;
  box-shadow: none;

  transition: height 0.35s;

  &.isShow {
    height: 400px;
  }

  ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)}
`

export const PopOverImg = styled.img`
  pointer-events: none;
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border: none;
  box-shadow: none;
`;

export const Item = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 32px 40px;
  cursor: pointer;
  transition: background-color 0.3s, border-top-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${hexToRGBA(colors.white, 0.2)};

  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)}
    border-top-color: ${colors.yellow};

    span:first-of-type {
      ${({ theme }) => getCurrentColorStyles("black", theme)}
    }

    span:last-of-type {
      ${({ theme }) => getCurrentColorStyles("white", theme)}
    }
  }

  &:last-child {
    border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};
  }
`;
