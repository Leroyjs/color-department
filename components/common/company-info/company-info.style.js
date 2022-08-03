import styled from "@emotion/styled";
import { colors } from "styles";

export const CompanyInfoWrapper = styled.div`
    position: absolute;
    padding: 0 40px 40px;
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

export const ContactInfo = styled.div``

export const AdditionInfo = styled.div`
    text-align: right;
`

export const MadeBy = styled.div`
    padding-bottom: 16px;
    & span {
        color: ${colors.grey}
    }
`