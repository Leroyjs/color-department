import { Caption, H3, Menu } from 'components';
import { Blob, Hamburger } from "components/common";
import { useEffect, useRef, useState } from "react";
import theme from '../../../__data__/theme';
import { HeaderItem, HeaderWrapper, Title } from "./header.style";
import { setTransperentByScroll } from "./utils";


export const Header = ({ transparentToComponent }) => {
  const headerRef = useRef(null);
  //Прозрачность фона
  const [transparentBg, setTransparentBg] = useState(0);
  //Открытие меню
  const [isOpenMenu, setMenuState] = useState(false);

  //Обработка скрола, для изменения прозрачности
  useEffect(() => {
    return setTransperentByScroll(transparentToComponent, setTransparentBg, headerRef, window)
  }, [])

  return (
    <>
      <HeaderWrapper ref={headerRef} transparency={transparentBg} isMenuOpen={isOpenMenu}>
        <HeaderItem onClick={() => setMenuState(!isOpenMenu)}>
          <Hamburger isActive={isOpenMenu} />
        </HeaderItem>
        <HeaderItem onClick={() => theme.setNextThemeName()}>
          <Blob />
        </HeaderItem>
        <HeaderItem>
          <Title>
            <H3 color='white'>color department</H3>
            <H3 color='white'>los angeles</H3>
          </Title>
        </HeaderItem>
        <HeaderItem>
          <Caption color='white'>Lets talk</Caption>
        </HeaderItem>
      </HeaderWrapper>
      <Menu isOpen={isOpenMenu}></Menu>
    </>

  );
}



/*
if (transparentToComponent) {
      const observedComponent = transparentToComponent.current;
      const height = observedComponent.offsetHeight - headerRef.current.offsetHeight;

      let tmpPosition = undefined;
      let tmpTransparent = undefined;

      const scrollListener = () => {
        tmpPosition = observedComponent.getBoundingClientRect();
        tmpTransparent = Number(Math.abs(tmpPosition.y / height).toFixed(2));

        if (tmpTransparent < 1 || transparentBg !== 1) { setTransparentBg(tmpTransparent > 1 ? 1 : tmpTransparent) }
      }

      window.addEventListener('scroll', scrollListener);

      return () => { window.removeEventListener('scroll', scrollListener) }
    }

*/