import { NavigationBarMap, CompanyInfo, FooterNavigation, MapWrapper } from "components";
import { MenuItem } from './menu-item/menu-item';
import { MenuBody, MenuFooter, MenuList, MenuMap, MenuWrapper, HideForMobile, ShowForMobile } from "./menu.style";
import {useVH, useNoScroll} from "utils";

const menuItems = [
    { title: 'projects', link: '/projects' },
    { title: 'team', link: '/about' },
    { title: 'shop', link: '/shop' },
    { title: "let's talk", link: '/order' }
]

export const Menu = ({ isOpen, props }) => {
    useVH();
    useNoScroll(isOpen);
    //TODO: Навигация
    const navigateByLink = (link) => (_) => { }

    return (
        <MenuWrapper isOpen={isOpen} {...props}>
            <MenuBody>
                <MenuList>
                    {
                        menuItems.map((item) =>
                            <MenuItem
                                link={item.link}
                                key={item.title}
                                title={item.title}
                                onClick={navigateByLink(item.link)}
                            ></MenuItem>)
                    }
                </MenuList>
                <MenuMap>
                    <MapWrapper
                        coordinates={[34.0706079, -118.2884803]}
                        source={"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"}
                    />
                </MenuMap>
                <HideForMobile>
                    <CompanyInfo />
                </HideForMobile>
            </MenuBody>
            <MenuFooter isOpen={isOpen}>
                <HideForMobile>
                    <FooterNavigation></FooterNavigation>
                </HideForMobile>
                <ShowForMobile>
                    <NavigationBarMap isParentOpen={isOpen} />
                </ShowForMobile>
            </MenuFooter>
        </MenuWrapper>
    );
}