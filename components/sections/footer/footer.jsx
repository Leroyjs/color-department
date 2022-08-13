import { FooterWrapper, FooterMapWrapper, FooterInfoWrapper, FooterLogo, FoxWrapper, FooterModalWrapper } from './footer.style';
import { FooterNavigation, CompanyInfo, FoxLogo, H3, Caption, FullSizeButton } from 'components';
import { useState } from 'react';

export const Footer = () => {

    const [isOpenMap, setMapState] = useState(false);
    const toggleMapState = () => { setMapState(prevState => !prevState) };

    return (
        <FooterWrapper >
            <FooterInfoWrapper>
                <FooterLogo>
                    <H3>find out more. follow the fox.</H3>
                    <FoxWrapper>
                        <FoxLogo></FoxLogo>
                    </FoxWrapper>
                    <Caption color="white">2022 color department</Caption>
                </FooterLogo>
                <CompanyInfo></CompanyInfo>
            </FooterInfoWrapper>
            <FooterModalWrapper isOpen={isOpenMap}>
                <FooterNavigation></FooterNavigation>
                <FooterMapWrapper >
                    <FullSizeButton onClick={toggleMapState}></FullSizeButton>
                </FooterMapWrapper>
            </FooterModalWrapper>
        </FooterWrapper>
    )
}
