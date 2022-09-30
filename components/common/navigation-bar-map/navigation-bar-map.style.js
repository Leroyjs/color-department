import { css } from '@emotion/css'
import styled from '@emotion/styled'
import {
  breakpointsWidth,
  colors,
  getCurrentGridTemplateColumsStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
  sizes,
} from 'styles'

export const FooterWrapper = styled.div`
  background-color: ${colors.black};
  display: grid;
  flex-direction: column;
  position: relative;
  ${getCurrentGridTemplateColumsStyle()}
`

export const FoxStyle = css`
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 192px;
    height: 192px;
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 90px;
    height: 90px;
  }
`

export const FooterMapWrapper = styled.div`
  transition: height 0.7s;
  width: 100%;
  height: calc(100vh - ${sizes['desktopLG'].x1} - 1px);

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: calc(var(--fsvh, 1vh) * 100 - ${sizes['tabletLG'].thirdX3} - 1px);
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: calc(var(--fsvh, 1vh) * 100 - 37.5vw - 84px);
  }
`

export const FooterModalWrapper = styled.div`
  position: relative;
  transition: height 0.7s;
  overflow: hidden;
  width: 100vw;
  bottom: 0;
  border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};
  height: calc(100vh - ${sizes['desktopLG'].half});

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: calc(var(--fsvh, 1vh) * 100 - ${sizes['tabletLG'].thirdX2});
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin-bottom: 84px;
    height: calc(var(--fsvh, 1vh) * 100 - 25vw - 82px);
  }
`

export const FooterCompanyInfoMobile = styled.div`
  display: none;
  position: absolute;
  width: 100vw;
  bottom: 0;
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    & > div {
      background-color: ${colors.black};
    }

    display: inline-block;
  }
`
