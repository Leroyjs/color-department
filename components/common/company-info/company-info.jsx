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
        <a
          href="https://instagram.com/friendsdesigndepartment?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <MadeBy>
            <Caption>made by</Caption>
            <Caption style={{ whiteSpace: 'nowrap' }}>
              design department
            </Caption>
          </MadeBy>
        </a>
        <LinksBy>
          <a href={link_policy || ''} target="_blank" rel="noopener noreferrer">
            <CaptionLink>Privacy </CaptionLink>
          </a>
          <CaptionBr>|</CaptionBr>
          <a href={link_terms || ''} target="_blank" rel="noopener noreferrer">
            <CaptionLink>Terms</CaptionLink>
          </a>
        </LinksBy>
      </AdditionInfo>
    </CompanyInfoWrapper>
  )
}
