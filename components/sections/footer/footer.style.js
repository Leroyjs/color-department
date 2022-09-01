import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { colors } from 'styles';
import { getCurrentGridTemplateColumsStyle, getCurrentPaddingStyle, sizes, breakpointsWidth } from 'styles';
import { Caption } from 'components';
import { applyPaddings } from 'styles';
import { applyMargins } from 'styles';
import { getVW } from 'styles';
export const FooterWrapper = styled.div`
    background-color: ${colors.black};
    display: grid;
    flex-direction: column;
    position: relative;
    z-index: 0;
    ${getCurrentGridTemplateColumsStyle()};
    ${applyPaddings};
    ${applyMargins};
`

export const FooterInfoWrapper = styled.div`
    grid-column: 1/-1;
    position: relative;
    margin-bottom: ${sizes['desktopLG'].x1};
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        margin-bottom: ${sizes['tabletLG'].thirdX2};
    }
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        margin-bottom: calc(${sizes['tabletLG'].x1} + 86px);
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
    @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
        width: ${getVW(200)};
        height: ${getVW(200)};
    }
    @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
        width: 200px;
        height: 200px;
    }
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        width: 192px;
        height: 192px;
    }
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        width: 90px;
        height: 90px;
    }
    
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
