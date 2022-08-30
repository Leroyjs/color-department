import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";
import { colors, breakpointsWidth } from "styles";
import { getVW } from "styles";

const sideLineAnimation = (top, rotate, reverse) => {
  return keyframes`
  ${reverse ? 'to' : 'from'} {
    top:0px;
    transform:rotate(0);
  }
  50% {
    top:${top};
    transform:rotate(0);
  }
  ${reverse ? 'from' : 'to'} {
    top:${top};
    transform:rotate(${rotate}deg);
  }
  `
}

const moddleLineAnimation = (reverse) => {
  return keyframes`
  ${reverse ? 'to' : 'from'} { transform: scale(1);}
  ${reverse ? 'from' : 'to'} {transform: scale(0);}
  `
}

const runAnimation = (reverse, time = '0.5s', type = 'ease') => {
  const addition = `${time} ${type} ${reverse ? 'backwards' : 'forwards'}`
  return `
    & div:nth-of-type(2){ animation: ${moddleLineAnimation(reverse)} ${addition};}
    @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
      & div:nth-of-type(1){ animation: ${sideLineAnimation('7px', 45, reverse)} ${addition};}
      & div:nth-of-type(3){ animation: ${sideLineAnimation('-7px', -45, reverse)} ${addition};}
    }
    @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
      & div:nth-of-type(1){ animation: ${sideLineAnimation(getVW(7), 45, reverse)} ${addition};}
      & div:nth-of-type(3){ animation: ${sideLineAnimation(getVW(-7), -45, reverse)} ${addition};}
    }
    @media screen and (max-width: ${breakpointsWidth.phone}) {
      & div:nth-of-type(1){ animation: ${sideLineAnimation('5px', 45, reverse)} ${addition};}
      & div:nth-of-type(3){ animation: ${sideLineAnimation('-5px', -45, reverse)} ${addition};}
    }
  `
}

export const HumburgerLine = styled.div`
  position: relative;
  background-color: ${colors.white};
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
        width: ${getVW(24)};
        height: ${getVW(2)};
  }
  @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
        width: 24px;
        height: 2px;
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
        width: 20px;
        height: 2px;
  }
`

/**TODO: эта крыса при запуске приложения сразу устанавливала для флага isActive = false
 * из-за чего сразу проигрывалась анимация закрытия крестика. Добавил флаг в замыкание, чтобы
 * можно было отследить состояние, когда крестик(бургер) никто не трогал 
 */
export const HumburgerWrapper = (() => {
  const skipDefaultFlag = false;

  return styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
        width: ${getVW(24)};
        height: ${getVW(16)};
  }
  @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
        width: 24px;
        height: 16px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
        width: 20px;
        height: 12px;
  }
  
  ${({ isActive }) => {
      if (skipDefaultFlag) {
        return isActive ? runAnimation() : runAnimation(true)
      } else if (isActive) { skipDefaultFlag = true; }
    }}
  `

})()