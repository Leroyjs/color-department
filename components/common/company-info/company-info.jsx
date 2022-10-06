import { Caption } from 'components'
import {
  AdditionInfo,
  CompanyInfoWrapper,
  YearInfoMobile,
  ContactInfo,
  MadeBy,
  CaptionLink,
  LinksBy,
  CaptionBr,
} from './company-info.style'
import { colors } from 'styles'
import Link from 'next/link'

export const CompanyInfo = ({
  email,
  phone,
  company_name,
  link_policy,
  link_terms,
  ...props
}) => {
  return (
    <CompanyInfoWrapper {...props}>
      <ContactInfo>
        <Link href={`mailto:${email}`}>
          <CaptionLink>{email}</CaptionLink>
        </Link>
        <Link href={'tel:25148891853'}>
          <CaptionLink>{phone}</CaptionLink>
        </Link>
      </ContactInfo>
      <YearInfoMobile>
        <Caption>
          {new Date().getFullYear()} {company_name}
        </Caption>
      </YearInfoMobile>
      <AdditionInfo>
        <Link href="https://instagram.com/friendsdesigndepartment?igshid=YmMyMTA2M2Y=">
          <MadeBy>
            <Caption>made by</Caption>
            <Caption style={{ whiteSpace: 'nowrap' }}>
              design department
            </Caption>
          </MadeBy>
        </Link>
        <LinksBy>
          <Link href={link_policy || ''}>
            <CaptionLink>Privacy </CaptionLink>
          </Link>
          <CaptionBr>|</CaptionBr>
          <Link href={link_terms || ''}>
            <CaptionLink>Terms</CaptionLink>
          </Link>
        </LinksBy>
      </AdditionInfo>
    </CompanyInfoWrapper>
  )
}
