import styled from "@emotion/styled";
import { hexToRGBA } from "styles";
import { colors, getCurrentPaddingStyle, breakpointsWidth } from "styles";

export const CompanyInfoWrapper = styled.div`
    position: absolute;
    ${getCurrentPaddingStyle('', 'md')};
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    & span {
        display: block;
        color: ${colors.white}
    }
`

export const ContactInfo = styled.div`
 @media screen and (max-width: ${breakpointsWidth.phone}) {
        display: none;
    }
`

export const AdditionInfo = styled.div`
    text-align: right;
`

export const MadeBy = styled.div`
    padding-bottom: 16px;
    & span {
        color: ${hexToRGBA(colors.white,0.2)}
    }
`


export const YearInfoMobile = styled.div`
    display: none;
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        display: inline-block;
    }
    
`