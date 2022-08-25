import {FoxStyle, FooterWrapper, FooterMapWrapper, FooterInfoWrapper, FooterLogo, FoxWrapper, DynamicHeightForMap, FooterModalWrapper } from './footer.style';
import { FooterNavigation, CompanyInfo, FoxLogo, H3, Caption, FullSizeButton, MapWrapper } from 'components';
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
                        <FoxLogo className={FoxStyle}></FoxLogo>
                    </FoxWrapper>
                    <Caption color="white">2022 color department</Caption>
                </FooterLogo>
                <CompanyInfo></CompanyInfo>
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
        </FooterWrapper>
    )
}
