import { Caption } from 'components'
import { AdditionInfo, CompanyInfoWrapper, YearInfoMobile, ContactInfo, MadeBy } from './company-info.style'
export const CompanyInfo = (props) => {
    return (
        <CompanyInfoWrapper {...props}>
            <ContactInfo>
                <Caption>color@department.com</Caption>
                <Caption>2 514 889-18-53</Caption>
            </ContactInfo>
            <YearInfoMobile>
                <Caption>2022 color department</Caption>
            </YearInfoMobile>
            <AdditionInfo>
                <MadeBy>
                    <Caption>made by</Caption>
                    <Caption>design department</Caption>
                </MadeBy>
                <Caption>privacy policy</Caption>
            </AdditionInfo>
        </CompanyInfoWrapper>
    )
}