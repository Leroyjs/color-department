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

  function handleEnter() {
    const optionContainerEl = popOverRef.current;
    if (!optionContainerEl) return;
    optionContainerEl.classList.add("isShow");
  }

  function handleLeave() {
    const optionContainerEl = popOverRef.current;

    if (optionContainerEl?.classList.contains("isShow")) {
      optionContainerEl.classList.remove("isShow");
    }
  }

  const handleMove = debounce((e) => {
    const target = e.target;
    const popOver = popOverRef.current;

    if (!popOver || !target) return;

    const rectTarget = target.getBoundingClientRect();
    const rectPopOver = popOver.getBoundingClientRect();

    const startX = 0;
    const endX = rectTarget.width - (rectPopOver.width + 80);
    // e.clientX - rectPopOver.width
    // const x =  clamp(e.clientX - rectTarget.left, startX, endX);
    const x =
      e.clientX - rectTarget.left >= endX
        ? e.clientX - (rectTarget.left + rectPopOver.width) - 40
        : e.clientX - rectTarget.left + 40;
    const y = e.clientY - rectTarget.top;

    popOver?.setAttribute(
      "style",
      `transform: translate(${x}px, calc(-100% + ${y - 40}px))`
    );
  }, 10);
  return (
    <Item
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
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
