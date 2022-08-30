import styled from '@emotion/styled';
import { getVW } from 'styles';
import { breakpointsWidth } from 'styles';

export const BlobWrapper = styled.div`
    cursor: pointer;
    @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
        svg {
            height: ${getVW(28)};
            width: ${getVW(20)};
        }
    }
    @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
        svg {
            height: 28px;
            width: 20px;
        }
    }
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        svg {
            height: 28px;
            width: 20px;
        }
    }
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        svg {
            height: 20px;
            width: 16px;
        }
    }
`