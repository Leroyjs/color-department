import styled from "@emotion/styled";
import {
    colors,
    fontFamilies,
    fontSizes,
    getCurrentFontSizeStyle,
    hexToRGBA,
} from "styles";

export const InputWrapper = styled.div`
  position: relative;
`;

const lineHeight = 90
export const TextAreaWrapper = styled('textarea')(({isError}) => ({

    width: '100%',
    minHeight: lineHeight * 4 + 'px',
    overflow: 'hidden',
    textTransform: 'uppercase',

    resize: 'none',
    fontSize: fontSizes.desktopLG.h3,
    color: isError ? colors.red : colors.yellow,
    fontFamily: fontFamilies.mainFont,

    lineHeight: lineHeight + 'px',
    backgroundImage: `linear-gradient(transparent, transparent calc(${lineHeight}px - 2px), ${isError ? colors.red : colors.white} 0px)`,
    backgroundSize: `100% ${lineHeight}px`,
    backgroundPositionY: `${-0.2 * lineHeight}px`,
}));

export const Error = styled.div`
  width: 100%;
  color: ${colors.red};
  text-transform: uppercase;
  position: absolute;
  top: calc(100% + 4px);
  font-family: ${fontFamilies.subFont};

  ${getCurrentFontSizeStyle("caption")};
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${fontSizes.desktopLG.h3};
  font-family: ${fontFamilies.mainFont};
  color: ${({isError}) => isError ? colors.red : colors.white};
  margin-bottom: 8px;
`;

