import { Caption } from 'components'
import { AdditionInfo, CompanyInfoWrapper, YearInfoMobile, ContactInfo, MadeBy, CaptionLink } from './company-info.style'
import { colors } from 'styles'
import Link from 'next/link'
export const CompanyInfo = (props) => {
    return (
        <CompanyInfoWrapper {...props}>
            <ContactInfo>
                <Link href={'mailto:color@department.com'}>
                    <CaptionLink >color@department.com</CaptionLink>
                </Link>
                <Link href={'tel:25148891853'}>
                    <CaptionLink>2 514 889-18-53</CaptionLink>
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
                    <CaptionLink >privacy policy</CaptionLink>
                </Link>
            </AdditionInfo>
        </CompanyInfoWrapper>
    )
}