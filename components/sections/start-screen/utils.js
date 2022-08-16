import { throttling } from "utils";

const onScrollAction = (setHeight, componentRef) => {
  const [visibleNode] = componentRef.childNodes;
  const initialY = componentRef.getBoundingClientRect().y;
  const wrapperHeight = componentRef.getBoundingClientRect().height;
  //const headerHeight = unvisibleNode.getBoundingClientRect().height;
  let delta = 0;

  return () => {
    delta = Math.abs(componentRef.getBoundingClientRect().y - initialY);
    if (delta > wrapperHeight) return;
    //const deltaToPercent = Number((delta*100/wrapperHeight).toFixed(2));
    //console.log(deltaToPercent)
    //unvisibleNode.style.height = deltaToPercent + '%';
    visibleNode.style.transform = "translateY(" + delta.toFixed(2) + "px)";
    //componentRef.style.top = initPadding + Math.abs(delta) + 'px';
    console.log("-------------START----------");
    console.log("delta", delta);
    console.log("component", componentRef);
    // /console.log('componentRef', wrapperHeight - delta)
    console.log(componentRef.getBoundingClientRect());
    console.log("window pageUOffset", window.pageYOffset);
    console.log("window scrollY", window.scrollY);
    console.log("-------------END------------");
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
