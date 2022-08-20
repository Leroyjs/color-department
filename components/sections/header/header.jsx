import { Caption, H3, Menu } from 'components';
import { Blob, Hamburger } from "components/common";
import { useEffect, useRef, useState } from "react";
//TODO: Кривой импорт
import theme from '../../../__data__/theme';
import { HeaderItemBlob, HeaderItemHumburger, HeaderItemLetsGo, HeaderItemTitle, HeaderWrapper, Title } from "./header.style";
import { setTransperentByScroll } from "./utils";

export const Header = ({ transparentToComponent }) => {
  const headerRef = useRef(null);
  //Прозрачность фона
  const [transparentBg, setTransparentBg] = useState(1);
  //Открытие меню
  const [isOpenMenu, setMenuState] = useState(false);

  //Обработка скрола, для изменения прозрачности
  useEffect(() => {
    return setTransperentByScroll(transparentToComponent, setTransparentBg, headerRef, window)
  }, [])

  return (
    <>
      <HeaderWrapper ref={headerRef} transparency={transparentBg} isMenuOpen={isOpenMenu}>
        <HeaderItemHumburger onClick={() => setMenuState(prevState => !prevState)}>
          <Hamburger isActive={isOpenMenu} />
        </HeaderItemHumburger>
        <HeaderItemBlob onClick={() => theme.setNextThemeName()}>
          <Blob />
        </HeaderItemBlob>
        <HeaderItemTitle>
          <Title>
            <H3 color='white'>color department</H3>
            <H3 color='white'>los angeles</H3>
          </Title>
        </HeaderItemTitle>
        <HeaderItemLetsGo>
          <Caption color='white'>Lets talk</Caption>
        </HeaderItemLetsGo>
      </HeaderWrapper>
      <Menu isOpen={isOpenMenu}></Menu>
    </>
  );
}