import { Caption } from "components";
import { MenuItem } from './menu-item/menu-item';
import { CompanyInfo, MenuBody, MenuFooter, MenuFooterItem, MenuList, MenuMap, MenuWrapper } from "./menu.style";
import { Freezer } from "utils";


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

export const Menu = ({ isOpen, props }) => {

    const navigateByLink = (link) => (_) => {
        console.log(link)
    }

    return (
        <MenuWrapper {...props}>
            <MenuBody>
                <MenuList>
                    {
                        menuItems.map((item) => <MenuItem
                            key={item.title}
                            title={item.title}
                            onClick={navigateByLink(item.link)}>
                        </MenuItem>)
                    }
                </MenuList>
                <MenuMap>
                </MenuMap>
                <CompanyInfo>
                    <Caption>color@department.com</Caption>
                    <Caption>2 514 889-18-53</Caption>
                </CompanyInfo>
            </MenuBody>
            <MenuFooter>
                {
                    footerItems.map((item) =>
                        <MenuFooterItem key={item.title} onClick={navigateByLink(item.link)}>
                            <Caption color={'white'} >{item.title}</Caption>
                        </MenuFooterItem>)
                }
            </MenuFooter>
        </MenuWrapper>
    );
} 
