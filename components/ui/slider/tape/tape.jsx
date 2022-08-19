import React, {useMemo} from 'react';
import {PropTypes} from "prop-types";
import {propTypesColors, propTypesMargin, propTypesPadding} from "../../../types";
import {FrameTitle, TapeList, ViewWrapper} from "./tape.style";

export const Tape = ({titles = [], currentIndex = 0, ...props}) => {
    const translateY = useMemo(() => (-100 / titles.length) * currentIndex, [currentIndex]);

    return (
        <ViewWrapper {...props}>
            <TapeList translateY={translateY}>
                {
                    titles.map(({title}) => (
                        <FrameTitle key={title}>
                            {title}
                        </FrameTitle>
                    ))
                }
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
}
