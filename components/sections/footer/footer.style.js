import styled from '@emotion/styled';
import { colors } from 'styles';
import { getCurrentGridTemplateColumsStyle, getCurrentPaddingStyle, sizes } from 'styles';

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

export const FooterMapWrapper = styled.div`
    height: 100%;
`

export const DynamicHeightForMap = styled.div`
    height: ${sizes['desktopLG'].half};
    ${({ isOpen }) => isOpen ? `height: calc(100vh - ${sizes['desktopLG'].x1})` : ""};
    transition: height 0.7s;
`

export const FooterModalWrapper = styled.div`
    height: ${sizes['desktopLG'].x1};
    position: absolute;
    grid-column: 1/-1;
    bottom: 0;
    transition: height 0.7s;
    overflow: hidden;
    max-width: 100vw;
    ${({ isOpen }) => isOpen ? `height: calc(100vh - ${sizes['desktopLG'].half})` : ""};
`