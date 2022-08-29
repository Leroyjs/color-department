import React, { useRef } from "react";
import { debounce } from "utils";
import {
  Item,
  LabelEnd,
  LabelStart,
  PopOver,
  PopOverImg,
  AboutPhoneImg,
  FlexControl,
} from "./awards-list.style";

export const AwardsItem = ({
  modalId,
  startLabel,
  endLabel,
  img,
  onClick,
  isAboutImg = false,
  ...props
}) => {
  const popOverRef = useRef();

  function handleEnter(e) {
    const optionContainerEl = popOverRef.current;
    if (!optionContainerEl) return;
    calcPosition(e);
    optionContainerEl.classList.add("isShow");
  }

  function handleLeave() {
    const optionContainerEl = popOverRef.current;

    if (optionContainerEl?.classList.contains("isShow")) {
      optionContainerEl.classList.remove("isShow");
      setTimeout(()=> {
        optionContainerEl.removeAttribute('style');
      }, 350);
    }
  }

  function calcPosition(e) {
    const target = e.target;
    const popOver = popOverRef.current;

    if (!popOver || !target) return;

    const rectTarget = target.getBoundingClientRect();
    const rectPopOver = popOver.getBoundingClientRect();
    const endX = rectTarget.width - (rectPopOver.width + 80);
    const x =
        e.clientX - rectTarget.left >= endX
            ? e.clientX - (rectTarget.left + rectPopOver.width) - 40
            : e.clientX - rectTarget.left + 40;
    const y = e.clientY - rectTarget.top;

    popOver?.setAttribute(
        "style",
        `transform: translate(${x}px, calc(-100% + ${y - 40}px))`
    );
  }

  return (
    <Item
      onMouseEnter={handleEnter}
      onMouseMove={debounce(calcPosition, 10)}
      onMouseLeave={handleLeave}
      onClick={() => onClick?.(modalId)}
      {...props}
    >
      <AboutPhoneImg src={img} isAboutImg={isAboutImg} />
      <FlexControl>
        <LabelStart>{startLabel}</LabelStart>
        <LabelEnd>{endLabel}</LabelEnd>
      </FlexControl>
      <PopOver ref={popOverRef}>
        <PopOverImg src={img} />
      </PopOver>
    </Item>
  );
};
