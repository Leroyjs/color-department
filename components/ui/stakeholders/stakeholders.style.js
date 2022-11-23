import styled from '@emotion/styled'
import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  getCurrentPaddingStyle,
  hexToRGBA,
  colors,
} from 'styles'
import { Caption } from '../caption'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  ${applyMargins};
  ${applyPaddings};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    ${getCurrentPaddingStyle('horizontal', 'md')};
    gap: 16px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  } ;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  padding-bottom: 12px;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 48%;
  }
`

export const CaptionStyled = styled(Caption)`
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    color: ${hexToRGBA(colors.white, 0.4)};
  } ;
`
