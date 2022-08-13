import { Caption } from 'components'
import { AdditionInfo, CompanyInfoWrapper, ContactInfo, MadeBy } from './company-info.style'
export const CompanyInfo = () => {
    return (
        <CompanyInfoWrapper>
            <ContactInfo>
                <Caption>color@department.com</Caption>
                <Caption>2 514 889-18-53</Caption>
            </ContactInfo>
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