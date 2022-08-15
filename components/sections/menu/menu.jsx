import { CompanyInfo, FooterNavigation } from "components";
import { MenuItem } from './menu-item/menu-item';
import { MenuBody, MenuFooter, MenuList, MenuMap, MenuWrapper } from "./menu.style";
import {MapWrapper} from "./menu-map/map-wrapper";

const menuItems = [
    { title: 'projects', link: '' },
    { title: 'team', link: '' },
    { title: 'shop', link: '' },
    { title: "let's talk", link: '' }
]

export const Menu = ({ isOpen, props }) => {

    //TODO: Навигация
    const navigateByLink = (link) => (_) => {}

    return (
        <MenuWrapper isOpen={isOpen} {...props}>
            <MenuBody>
                <MenuList>
                    {
                        menuItems.map((item) =>
                            <MenuItem
                                key={item.title}
                                title={item.title}
                                onClick={navigateByLink(item.link)}
                            ></MenuItem>)
                    }
                </MenuList>
                <MenuMap>
                    <MapWrapper />
                </MenuMap>
                <CompanyInfo />
            </MenuBody>
            <MenuFooter isOpen={isOpen}>
                <FooterNavigation></FooterNavigation>
            </MenuFooter>
        </MenuWrapper>
    );
}