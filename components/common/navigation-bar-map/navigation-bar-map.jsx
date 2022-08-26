import { CompanyInfo, FooterNavigation, FullSizeButton, MapWrapper } from 'components';
import { useState } from 'react';
import { DynamicHeightForMap, FooterMapWrapper, FooterModalWrapper, FooterCompanyInfoMobile } from './navigation-bar-map.style';
export const NavigationBarMap = (props) => {
    const [isOpenMap, setMapState] = useState(false);
    const toggleMapState = () => { setMapState(prevState => !prevState) };

    return (
        <>
            <FooterModalWrapper isOpen={isOpenMap} {...props}>
                <FooterNavigation></FooterNavigation>
                <FooterMapWrapper style={{ 'position': 'relative' }}>
                    <FullSizeButton onClick={toggleMapState} style={{ zIndex: 500 }} />
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
        </>
    )
} 