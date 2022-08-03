import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";

const sideLineAnimation = (top, rotate, reverse) => {
  return keyframes`
  ${reverse ? 'to' : 'from'} {
    top:0px;
    transform:rotate(0);
  }
  50% {
    top:${top}px;
    transform:rotate(0);
  }
  ${reverse ? 'from' : 'to'} {
    top:${top}px;
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
    & div:nth-of-type(1){ animation: ${sideLineAnimation(7, 45, reverse)} ${addition};}
    & div:nth-of-type(2){ animation: ${moddleLineAnimation(reverse)} ${addition};}
    & div:nth-of-type(3){ animation: ${sideLineAnimation(-7, -45, reverse)} ${addition};}
  `
}

/**TODO: эта крыса при запуске приложения сразу устанавливала для флага isActive = false
 * из-за чего сразу проигрывалась анимация закрытия крестика. Добавил флаг в замыкание, чтобы
 * можно было отследить состояние, когда крестик(бургер) никто не трогал 
 */
export const HumburgerWrapper = (() => {
  const skipDefaultFlag = false;

  return styled.div`
  width: 24px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ isActive }) => {
      if (skipDefaultFlag) {
        return isActive ? runAnimation() : runAnimation(true)
      } else if (isActive) { skipDefaultFlag = true; }
    }}
  `
})()

export const HumburgerLine = styled.div`
  width: 24px;
  height: 2px;
  position: relative;
  background-color: white;
`