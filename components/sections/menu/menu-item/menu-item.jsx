import { MenuItemWrapper } from './menu-item.style'
import { H2 } from "components";
import { FoxPaw } from 'components';
import { useState } from 'react';


export const MenuItem = ({ title, ...props }) => {
    const [isHover, setHover] = useState(false);
    return (
        <MenuItemWrapper
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
            {...props}>
            <H2>{title}</H2>
            <FoxPaw isHover={isHover} />
        </MenuItemWrapper >
    )
}