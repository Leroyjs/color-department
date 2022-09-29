import {NavigationBarMap, CompanyInfo, FooterNavigation, MapWrapper} from "components";
import {MenuItem} from './menu-item/menu-item';
import {MenuBody, MenuFooter, MenuList, MenuMap, MenuWrapper, HideForMobile, ShowForMobile} from "./menu.style";
import {useVH, useNoScroll} from "utils";

export const Menu = ({isOpen, props, common}) => {
    useVH();
    useNoScroll(isOpen);

    return (
        <MenuWrapper isOpen={isOpen} {...props}>
            <MenuBody>
                <MenuList>
                    <MenuItem
                        link="/projects"
                        key="/projects"
                        title={common.nav_labels.projects}
                    />
                    <MenuItem
                        link="/team"
                        key="/team"
                        title={common.nav_labels.team}
                    />
                    <MenuItem
                        link="/shop"
                        key="/shop"
                        title={common.nav_labels.shop}
                    />
                    <MenuItem
                        link="/order"
                        key="/order"
                        title={common.nav_labels.order}
                    />
                </MenuList>
                <MenuMap>
                    <MapWrapper
                        coordinates={[
                            common.map?.longitude || 0,
                            common.map?.latitude || 0,
                        ]}
                        source={"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"}
                    />
                </MenuMap>
                <HideForMobile>
                    <CompanyInfo email={common.email}
                                 phone={common.phone}
                                 company_name={common.company_name}
                                 link_policy={common.link_policy}/>
                </HideForMobile>
            </MenuBody>
            <MenuFooter isOpen={isOpen}>
                <HideForMobile>
                    <FooterNavigation social={common.social}/>
                </HideForMobile>
                <ShowForMobile>
                    <NavigationBarMap common={common} isParentOpen={isOpen}/>
                </ShowForMobile>
            </MenuFooter>
        </MenuWrapper>
    );
}
