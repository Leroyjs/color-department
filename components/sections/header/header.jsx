import { Caption, H3, Menu, Blob, Hamburger } from 'components';
import {
  HeaderItemBlob,
  HeaderItemHumburger,
  HeaderItemLetsGo,
  HeaderItemTitle,
  HeaderWrapper,
  Title,
} from "./header.style";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { setTransperentByScroll } from "./utils";
//TODO: Кривой импорт
import theme from "../../../__data__/theme";

export const Header = ({ transparentToComponent }) => {
  const headerRef = useRef(null);
  //Прозрачность фона
  const [transparentBg, setTransparentBg] = useState(1);
  //Открытие меню
  const [isOpenMenu, setMenuState] = useState(false);

  //Обработка скрола, для изменения прозрачности
  useEffect(() => {
    return setTransperentByScroll(
      transparentToComponent,
      setTransparentBg,
      headerRef,
      window
    );
  }, []);

  return (
    <>
      <HeaderWrapper
        ref={headerRef}
        transparency={transparentBg}
        isMenuOpen={isOpenMenu}
        className="header-main"
      >
        <HeaderItemHumburger
          onClick={() => setMenuState((prevState) => !prevState)}
        >
          <Hamburger isActive={isOpenMenu} />
        </HeaderItemHumburger>
        <HeaderItemBlob onClick={() => theme.setNextThemeName()}>
          <Blob />
        </HeaderItemBlob>
        <Link href={"/"}>
          <HeaderItemTitle>
            <Title>
              <H3 color="white">color department los angeles</H3>
            </Title>
          </HeaderItemTitle>
        </Link>
        <Link href={"/order"}>
          <HeaderItemLetsGo>
            <Caption color="white">Lets talk</Caption>
          </HeaderItemLetsGo>
        </Link>
      </HeaderWrapper>
      <Menu isOpen={isOpenMenu}/>
    </>
  );
}
