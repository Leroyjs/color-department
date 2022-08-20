import { throttling } from "utils";

const onScrollAction = (setHeight, componentRef) => {
  const [visibleNode] = componentRef.childNodes;
  const initialY = componentRef.getBoundingClientRect().y;
  const wrapperHeight = componentRef.getBoundingClientRect().height;

  let delta = 0;

  return () => {
    delta = Math.abs(componentRef.getBoundingClientRect().y - initialY);
    if (delta > wrapperHeight) return;
    visibleNode.style.transform = "translateY(" + delta.toFixed(2) + "px)";

  };
};

/**
 *
 * @param {*} setHeight
 * @param {*} componentRef
 * @param {*} window
 * @returns
 */
export const resizeGridVisibleZone = (setHeight, componentRef, window) => {
  if (!componentRef) return;
  const onScrollCallback = throttling(
    onScrollAction(setHeight, componentRef.current),
    100
  );
  window.addEventListener("scroll", onScrollCallback);
  return () => {
    window.removeEventListener("scroll", onScrollCallback);
  };
};
