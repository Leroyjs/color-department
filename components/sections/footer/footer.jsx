import { CompanyInfo, FooterNavigation, FoxLogo, FullSizeButton, H3, MapWrapper } from 'components';
import { useState } from 'react';
import { DynamicHeightForMap, FooterCompanyInfoMobile, HideForMobile, FooterInfoWrapper, FooterLogo, FooterMapWrapper, FooterModalWrapper, FooterWrapper, FoxStyle, FoxTitleDA, FoxTitleMobile, FoxWrapper } from './footer.style';

export const Footer = () => {

    const [isOpenMap, setMapState] = useState(false);
    const toggleMapState = () => { setMapState(prevState => !prevState) };

    return (
        <FooterWrapper >
            <FooterInfoWrapper>
                <FooterLogo>
                    <H3>find out more. follow the fox.</H3>
                    <FoxWrapper>
                        <FoxLogo className={FoxStyle}></FoxLogo>
                    </FoxWrapper>
                    <FoxTitleDA color="white">2022 color department</FoxTitleDA>
                    <FoxTitleMobile color="white">Color@department.com <br /> 2 514 889-18-51</FoxTitleMobile>
                </FooterLogo>
                <HideForMobile>
                    <CompanyInfo></CompanyInfo>
                </HideForMobile>
            </FooterInfoWrapper>
            <FooterModalWrapper isOpen={isOpenMap}>
                <FooterNavigation style={{ 'position': 'relative' }}></FooterNavigation>
                <FooterMapWrapper style={{ 'position': 'relative' }}>
                    <FullSizeButton onClick={toggleMapState} style={{ zIndex: 1000 }} />
                    <DynamicHeightForMap isOpen={isOpenMap}>
                        <MapWrapper
                            coordinates={[34.0706079, -118.2884803]}
                            source={"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"}
                        />
                    </DynamicHeightForMap>
                </FooterMapWrapper>
            </FooterModalWrapper>
            <FooterCompanyInfoMobile>
                <CompanyInfo></CompanyInfo>
            </FooterCompanyInfoMobile>
        </FooterWrapper>
    )
}
