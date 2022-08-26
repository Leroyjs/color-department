import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { colors } from 'styles';
import { getCurrentGridTemplateColumsStyle, getCurrentPaddingStyle, sizes, breakpointsWidth, hexToRGBA } from 'styles';
import { Caption } from 'components';
export const FooterWrapper = styled.div`
    background-color: ${colors.black};
    display: grid;
    flex-direction: column;
    position: relative;
    ${getCurrentGridTemplateColumsStyle()}
`

export const FooterInfoWrapper = styled.div`
    grid-column: 1/-1;
    position: relative;
    margin-bottom: ${sizes['desktopLG'].x1};
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        margin-bottom: calc(${sizes['tabletLG'].x2});
    }
`

export const FooterLogo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    left:50%;
    transform: translateX(-50%);
    ${getCurrentPaddingStyle("bottom", 'md')};
`;

export const FoxWrapper = styled.div`
    ${getCurrentPaddingStyle("vertical", 'md')};
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
    height: 100%;

`

export const DynamicHeightForMap = styled.div`
    height: ${sizes['desktopLG'].half};
    ${({ isOpen }) => isOpen ? `height: calc(100vh - ${sizes['desktopLG'].x1})` : ""};
    transition: height 0.7s;
    & > #leaflet-map{
        height: 100vh;
    }
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        ${({ isOpen }) => isOpen ? `height: calc(100vh - 37.5vw - 68px})` : ""};        
    }
`

export const FooterModalWrapper = styled.div`
    height: ${sizes['desktopLG'].x1};
    position: absolute;
    transition: height 0.7s;
    overflow: hidden;
    width: 100vw;
    bottom: 0;
    border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};
    ${({ isOpen }) => isOpen ? `height: calc(100vh - ${sizes['desktopLG'].half})` : ""};
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        height: 25vw;
        margin-bottom: 12.5vw;
        ${({ isOpen }) => isOpen ? `height: calc(100vh - 37.5vw)` : ""};
    }
`

export const FooterCompanyInfoMobile = styled.div`
    display: none;
    position: absolute;
    z-index: 10000;
    width: 100vw;
    bottom: 0;
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        & > div {
            background-color: ${colors.black};
        }
        display: inline-block;    }
`

export const HideForMobile = styled.div`
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        display: none;
    }
`

export const FoxTitleDA = styled(Caption)`
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        display: none;
    }
`

export const FoxTitleMobile = styled(Caption)`
    text-align: center;
    display: none;
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        display: inline-block;
    }
    
`