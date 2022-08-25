import { FoxPaw, H2 } from "components";
import Link from 'next/link';
import { useState } from 'react';
import { MenuItemWrapper } from './menu-item.style';


export const MenuItem = ({ title, link, ...props }) => {
    const [isHover, setHover] = useState(false);
    const [clickAnimation, setClickAnimation] = useState(false);
    const onClick = () => {
        setClickAnimation(true);
        setTimeout(() => { setClickAnimation(false) }, 100)
    }

    return (
        <Link href={link}>
            <MenuItemWrapper
                onMouseDown={onClick}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}
                clickAnimation={clickAnimation}
                {...props}>
                <H2>{title}</H2>
                <FoxPaw isHover={isHover} />
            </MenuItemWrapper >
        </Link>
    )
}