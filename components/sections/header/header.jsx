import { Title, ButtonWrapper, HeaderWrapper } from "./header.style";
import { useEffect, useState, useRef } from "react";
import { Hamburger, Blob } from "../../common";
import { getCurrentColor } from "styles";
import { useTheme } from "@emotion/react";

export const Header = ({ transparentToComponent, onChange, ...props }) => {

  const [transparentBg, setTransparentBg] = useState(0);
  const headerRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    if (transparentToComponent) {
      console.log(
        //getCurrentColor(undefined,)

      )
      const observedComponent = transparentToComponent.current;
      const height = observedComponent.offsetHeight - headerRef.current.offsetHeight;

      let tmpPosition = undefined;
      let tmpTransparent = undefined;

      window.addEventListener('scroll', () => {
        tmpPosition = observedComponent.getBoundingClientRect();
        tmpTransparent = Number(Math.abs(tmpPosition.y / height).toFixed(2));
        console.log(tmpTransparent, tmpPosition.y)
        if (tmpTransparent < 1 || transparentBg !== 1) { setTransparentBg(tmpTransparent > 1 ? 1 : tmpTransparent) }
      })
    }
  })

  return (
    <HeaderWrapper ref={headerRef} transparency={transparentBg}>
      <ButtonWrapper >
        <Hamburger />
      </ButtonWrapper>
      <ButtonWrapper onClick={() => { console.log('трахать') }}>
        <Blob fill={getCurrentColor("primary", theme)} />
      </ButtonWrapper>
      <Title>
        <span>color department</span>
        <span>los angeles</span>
      </Title>
      <ButtonWrapper lg={true} hover={true}>
        <span>Lets talk</span>
      </ButtonWrapper>
    </HeaderWrapper>
  );
} 
