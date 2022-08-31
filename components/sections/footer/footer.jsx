import { CompanyInfo, FoxLogo, H3, NavigationBarMap } from 'components';
import { FooterInfoWrapper, FooterLogo, FooterWrapper, FoxStyle, FoxTitleDA, FoxTitleMobile, FoxWrapper, HideForMobile } from './footer.style';

export const Footer = (props) => {
    return (
      <FooterWrapper {...props}>
        <FooterInfoWrapper>
          <FooterLogo>
            <H3>find out more. follow the fox.</H3>
            <FoxWrapper>
              <FoxLogo className={FoxStyle}></FoxLogo>
            </FoxWrapper>
            <FoxTitleDA color="white">2022 color department</FoxTitleDA>
            <FoxTitleMobile color="white">
              Color@department.com <br /> 2 514 889-18-51
            </FoxTitleMobile>
          </FooterLogo>
          <HideForMobile>
            <CompanyInfo></CompanyInfo>
          </HideForMobile>
        </FooterInfoWrapper>
        <NavigationBarMap/>
      </FooterWrapper>
    );
}
