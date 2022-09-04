import { FrameTitle, TapeList, ViewWrapper } from "./tape.style";
import React, { useMemo } from "react";
import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../../types";

import { PropTypes } from "prop-types";
import Link from "next/link";

export const Tape = ({ titles = [], currentIndex = 0, ...props }) => {
  const translateY = useMemo(
    () => (-100 / titles.length) * currentIndex,
    [currentIndex]
  );

  return (
    <ViewWrapper {...props}>
      <TapeList translateY={translateY}>
        {titles.map(({ title, id }) => (
          <Link href={`/detail/${id}` || '/detail'} key={title+id}>
            <FrameTitle data-pointer="without-scale">
              {title}
            </FrameTitle>
          </Link>
        ))}
      </TapeList>
    </ViewWrapper>
  );
};

Tape.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  ...propTypesColors,
  ...propTypesMargin,
  ...propTypesPadding,
};
