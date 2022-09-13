import {useState, useEffect} from 'react';
import {CompanyInfo, FooterNavigation, FullSizeButton, MapWrapper} from 'components';
import {useVH, useNoScroll, moveDownPage} from 'utils';
import {zindex} from 'styles';
import {
    DynamicHeightForMap,
    FooterMapWrapper,
    FooterModalWrapper,
    FooterCompanyInfoMobile
} from './navigation-bar-map.style';

export const NavigationBarMap = ({common, isParentOpen, hasAutoscroll = false, ...props}) => {
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
                <FooterNavigation social={common.social}/>
                <FooterMapWrapper style={{'position': 'relative'}}>
                    <FullSizeButton onClick={toggleMapState} style={{zIndex: zindex.footer}}/>
                    <DynamicHeightForMap isOpen={isOpenMap}>
                        <MapWrapper
                            coordinates={[common.map.longitude, common.map.latitude]}
                            source={"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"}
                        />
                    </DynamicHeightForMap>
                </FooterMapWrapper>
            </FooterModalWrapper>
            <FooterCompanyInfoMobile>
                <CompanyInfo email={common.email}
                             phone={common.phone}
                             company_name={common.company_name}
                             link_policy={common.link_policy}/>
            </FooterCompanyInfoMobile>
        </>
    )
}
