import { MenuWrapper, MenuList, MenuMap, MenuBody, MenuFooter } from './menu.style'
export const Menu = (props) => {

    return (
        <MenuWrapper {...props}>
            <MenuBody>
                <MenuList>
                    <ul>
                        <li>TEXT</li>
                        <li>TEXT</li>
                        <li>TEXT</li>
                    </ul>
                </MenuList>
                <MenuMap>
                    КартОчка
                </MenuMap>
            </MenuBody>
            <MenuFooter />
        </MenuWrapper>
    );
} 
