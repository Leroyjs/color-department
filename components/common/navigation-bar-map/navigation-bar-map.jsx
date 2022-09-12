import { CompanyInfo, FooterNavigation, FullSizeButton, MapWrapper } from 'components';
import { useState, useEffect } from 'react';
import { DynamicHeightForMap, FooterMapWrapper, FooterModalWrapper, FooterCompanyInfoMobile } from './navigation-bar-map.style';
import { zindex } from 'styles';
import { useVH, useNoScroll, moveDownPage } from 'utils';
export const NavigationBarMap = ({ isParentOpen, hasAutoscroll = false, ...props }) => {
    const [isOpenMap, setMapState] = useState(false);
    useEffect(() => {
        if (!isParentOpen) {
            setMapState(false);
        }
    }, [isParentOpen]);

    useVH();
    useNoScroll(isOpenMap);

    const toggleMapState = () => {
        setMapState(prevState => {
            const newState = !prevState
            if (newState && hasAutoscroll) {
                moveDownPage();
            }
            return newState;
        })
    };

    return (
        <>
            <FooterModalWrapper isOpen={isOpenMap} {...props}>
                <FooterNavigation></FooterNavigation>
                <FooterMapWrapper style={{ 'position': 'relative' }}>
                    <FullSizeButton onClick={toggleMapState} style={{ zIndex: zindex.footer }} />
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