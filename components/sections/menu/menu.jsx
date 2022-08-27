import { NavigationBarMap, CompanyInfo, FooterNavigation, MapWrapper } from "components";
import { MenuItem } from './menu-item/menu-item';
import { MenuBody, MenuFooter, MenuList, MenuMap, MenuWrapper, HideForMobile, showForMobile } from "./menu.style";

const menuItems = [
    { title: 'projects', link: '/projects' },
    { title: 'team', link: '/about' },
    { title: 'shop', link: '/shop' },
    { title: "let's talk", link: '/order' }
]

export const Menu = ({ isOpen, props }) => {

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
                <showForMobile>
                    <NavigationBarMap isParentOpen={isOpen} />
                </showForMobile>
            </MenuFooter>
        </MenuWrapper>
    );
}