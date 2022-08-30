import { Caption } from 'components'
import { AdditionInfo, CompanyInfoWrapper, YearInfoMobile, ContactInfo, MadeBy } from './company-info.style'
import Link from 'next/link'
export const CompanyInfo = (props) => {
    return (
        <CompanyInfoWrapper {...props}>
            <ContactInfo>
                <Link href={'mailto:color@department.com'}>
                    <Caption style={{cursor:'pointer'}}>color@department.com</Caption>
                </Link>
                <Link href={''}>
                    <Caption style={{cursor:'pointer'}}>2 514 889-18-53</Caption>
                </Link>
            </ContactInfo>
            <YearInfoMobile>
                <Caption>2022 color department</Caption>
            </YearInfoMobile>
            <AdditionInfo>
                <MadeBy>
                    <Caption>made by</Caption>
                    <Caption style={{whiteSpace:'nowrap'}}>design department</Caption>
                </MadeBy>
                <Link href={''}>
                    <Caption style={{cursor:'pointer'}}>privacy policy</Caption>
                </Link>
            </AdditionInfo>
        </CompanyInfoWrapper>
    )
}