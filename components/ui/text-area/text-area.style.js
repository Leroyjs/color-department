import styled from "@emotion/styled";
import {
    colors,
    fontFamilies,
    fontSizes,
    getCurrentFontSizeStyle,
    getCurrentPaddingStyle,
    hexToRGBA,
    breakpointsWidth,
} from "styles";

const lineHeight = 90
export const InputWrapper = styled.div`
  position: relative;
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;

export const TextAreaInput = styled('textarea')(({isError}) => ({

    paddingTop: '18px',
    marginBottom: '-18px',
    width: '100%',
    overflow: 'hidden',
    textTransform: 'uppercase',

    resize: 'none',
    fontSize: fontSizes.desktopLG.h3,
    color: isError ? colors.red : colors.yellow,
    fontFamily: fontFamilies.mainFont,

    lineHeight: lineHeight + 'px',
    backgroundImage: `linear-gradient(transparent, transparent calc(${lineHeight}px - 2px), ${isError ? colors.red : hexToRGBA(colors.white, 0.2)} 0px)`,
    backgroundSize: `100% ${lineHeight}px`,
}));

export const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    font-size: ${fontSizes.desktopLG.h3};
    font-family: ${fontFamilies.mainFont};
    line-height: ${lineHeight + 'px'};
    background-image: ${`linear-gradient(transparent, transparent calc(${lineHeight}px - 2px), ${colors.white} 0px)`};
    background-size: ${`100% ${lineHeight}px`};
    transition: transform 0.5s;
    transform: scaleX(${({isActive}) => (isActive ? 1 : 0)});
    transform-origin: left;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`

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
  color: ${({ isError }) => (isError ? colors.red : colors.white)};
  margin-bottom: 10px;

  ${getCurrentPaddingStyle("top", "xxsm")};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    color: ${({ isError }) => (isError ? colors.red : colors.white)};
    opacity: 0.2;
    font-size: 24px;
  }
`;
