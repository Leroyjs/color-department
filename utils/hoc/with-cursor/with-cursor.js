import {
  SliderCursor,
  SliderCursorScaleWrapper,
  SliderCursorWrapper,
} from "./with-cursor.style";

import { useCursor } from "./utils";
import { useRef } from "react";

export const withCursor = (Component) => (props) => {
  const cursorWrapperRef = useRef();
  const cursorScaleWrapperRef = useRef();
  const cursorRef = useRef();

  const { handleCursorMove, handleCursorLeave, handleCursorEnter } = useCursor(
    cursorWrapperRef,
    cursorScaleWrapperRef,
    cursorRef
  );

  return (
    <div
      onMouseLeave={handleCursorLeave}
      onMouseMove={handleCursorMove}
      onMouseEnter={handleCursorEnter}
    >
      <SliderCursorWrapper ref={cursorWrapperRef}>
        <SliderCursorScaleWrapper ref={cursorScaleWrapperRef}>
          <SliderCursor ref={cursorRef} />
        </SliderCursorScaleWrapper>
      </SliderCursorWrapper>
      <Component {...props} />
    </div>
  );
};
