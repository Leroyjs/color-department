import { Caption, H3 } from 'components';
import { useEffect, useRef, useState } from "react";
import theme from '../../../__data__/theme';
import { Blob, Hamburger } from "../../common";
import { HeaderItem, HeaderWrapper, Title } from "./header.style";

export const Header = ({ transparentToComponent, onToggleMenu, onChange, ...props }) => {

  const headerRef = useRef(null);
  //Прозрачность фона
  const [transparentBg, setTransparentBg] = useState(0);
  //Открытие меню
  const [toggleMenu, setToggleMenu] = useState(false);
  //Обработка события нажатия на бургер
  const onHumburgerClick = () => {
    let newToggleState = !toggleMenu;
    setToggleMenu(newToggleState);
    onToggleMenu(newToggleState);
  }

  //Обработка скрола, для изменения прозрачности
  useEffect(() => {
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
  }, [])

  return (
    <HeaderWrapper ref={headerRef} transparency={transparentBg}>
      <HeaderItem onClick={onHumburgerClick}>
        <Hamburger />
      </HeaderItem>
      <HeaderItem onClick={() => theme.setNextThemeName()}>
        <Blob />
      </HeaderItem>
      <HeaderItem l={true}>
        <Title>
          <H3 color={'white'}>color department</H3>
          <H3 color={'white'}>los angeles</H3>
        </Title>
      </HeaderItem>
      <HeaderItem m={true} hover={true} {...props}>
        <Caption color={'white'}>Lets talk</Caption>
      </HeaderItem>

    </HeaderWrapper>
  );
} 
