import { useEffect, useRef, useState } from "react";

const getCoordinatesOfTargetCenter = (target) => {
  const rect = target.getBoundingClientRect();
  const withoutScale = target.dataset.pointer !== "without-scale";
  console.log(withoutScale, target.dataset.pointer);
  return {
    x: rect.x + rect.width * 0.5,
    y: rect.y + rect.height * 0.5,
    target,
    scale: withoutScale,
  };
};

export const useCursor = (
  cursorWrapperRef,
  cursorScaleWrapperRef,
  cursorRef
) => {
  const requestRef = useRef();
  const coordinates = useRef({ x: 0, y: 0 });
  const withoutAnimation = useRef(true);

  useEffect(() => {
    let windowWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;
    });

    const animate = () => {
      const x = cursorWrapperRef.current.getBoundingClientRect().x;
      const y = cursorWrapperRef.current.getBoundingClientRect().y;
      const diffX = x - coordinates.current.x;
      const diffY = y - coordinates.current.y;
      const rubberCoef = 10;

      const scale = (Math.abs(diffX) + Math.abs(diffY)) / windowWidth;
      const deg =
        Math.atan((y - coordinates.current.y) / (x - coordinates.current.x)) *
        57;

      const newX = withoutAnimation.current
        ? coordinates.current.x
        : x - diffX / rubberCoef;
      const newY = withoutAnimation.current
        ? coordinates.current.y
        : y - diffY / rubberCoef;

      cursorScaleWrapperRef.current.style.transform = `scale(${
        coordinates.current.scale ? 0.375 : 1
      })`;

      cursorWrapperRef.current.style.transform = `translate(calc(${newX}px), calc(${newY}px ))`;
      cursorRef.current.style.transform = `rotate(${deg}deg) scaleY(${
        1 - scale
      }) scaleX(${1 + scale})`;

      withoutAnimation.current = false;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleCursorMove = (e) => {
    const isSticky = e.target.hasAttribute("data-pointer");

    if (isSticky) {
      coordinates.current = getCoordinatesOfTargetCenter(e.target);
    } else {
      coordinates.current = { x: e.clientX, y: e.clientY };
    }
    cursorWrapperRef.current.style.opacity = 1;
  };

  const handleCursorLeave = () => {
    cursorWrapperRef.current.style.opacity = 0;
  };

  const handleCursorEnter = () => {
    withoutAnimation.current = true;
  };

  return { handleCursorMove, handleCursorLeave, handleCursorEnter };
};
