import { MenuWrapper, MenuList, MenuMap, MenuBody, MenuFooter, MenuFooterItem } from "./menu.style";
import { MenuItem } from './menu-item/menu-item';
import { Caption } from "components";
import { FoxPaw } from "components";

const footerItems = [
    { title: 'vimeo', link: 'ref)' },
    { title: 'instagram', link: 'ref->' },
    { title: 'linkedin', link: '<-ref' },
    { title: 'facebook', link: '<<ref' }
];

const menuItems = [
    { title: 'projects', link: '<<' },
    { title: 'team', link: '>>' },
    { title: 'shop', link: '**' },
    { title: "let's talk", link: '++' }
]

export const Menu = (props) => {

    const navigateByLink = (link) => (_) => {
        console.log(link)
    }

    return (
        <MenuWrapper {...props}>
            <MenuBody>
                <MenuList>
                    {
                        menuItems.map((item) => <MenuItem title={item.title} onClick={navigateByLink(item.link)}></MenuItem>)
                    }
                </MenuList>
                <MenuMap>
                    КартОчка
                </MenuMap>
            </MenuBody>
            <MenuFooter>
                {
                    footerItems.map((item) =>
                        <MenuFooterItem onClick={navigateByLink(item.link)}>
                            <Caption color={'white'} >{item.title}</Caption>
                        </MenuFooterItem>)
                }
            </MenuFooter>
        </MenuWrapper>
    );
} 
