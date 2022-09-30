import { CompanyInfo, FoxLogo, H3, NavigationBarMap } from 'components'
import {
  FooterInfoWrapper,
  FooterLogo,
  FooterWrapper,
  FoxStyle,
  FoxTitleDA,
  FoxTitleMobile,
  FoxWrapper,
  HideForMobile,
} from './footer.style'

export const Footer = ({ common, ...props }) => {
  return (
    <FooterWrapper {...props}>
      <FooterInfoWrapper>
        <FooterLogo>
          <H3>find out more. follow the fox.</H3>
          <FoxWrapper>
            <FoxLogo className={FoxStyle} />
          </FoxWrapper>
          <FoxTitleDA color="white">
            {new Date().getFullYear()} {common.company_name}
          </FoxTitleDA>
          <FoxTitleMobile color="white">
            ${common.email} <br /> ${common.phone}
          </FoxTitleMobile>
        </FooterLogo>
        <HideForMobile>
          <CompanyInfo
            email={common.email}
            phone={common.phone}
            company_name={common.company_name}
            link_policy={common.link_policy}
            link_terms={common.link_terms}
          />
        </HideForMobile>
      </FooterInfoWrapper>
      <NavigationBarMap common={common} hasAutoscroll={true} />
    </FooterWrapper>
  )
}
