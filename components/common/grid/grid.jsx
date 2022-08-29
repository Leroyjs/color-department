import { useEffect, useRef, useState } from "react";
import { getArrayOfIndex } from "styles";
import {
  getArrayOfImagesOnThisStep,
  getCurrentPattern,
  getNumdersOfAvaleblePositions,
  getStepFn,
  isValidPositionFn
} from "./grid-utils";
import { Cell, CellImage, GridInner, GridWrapper } from "./grid.style";

export const Grid = ({ props, arrayOfImages }) => {
  const [indexOfPattern, setIndexOfPattern] = useState(0);
  const [isPlayAnimation, setPlayAnimation] = useState(false);
  const [numdersOfAvaleblePositions, setNumdersOfAvaleblePositions] = useState(
    []
  );

  const isValidPositionForImage = isValidPositionFn(numdersOfAvaleblePositions);
  const patternWithoutAdaptive = useRef([]);
  const arrayOfImagesOnThisStep = useRef([]);

  useEffect(() => {
    patternWithoutAdaptive.current = getCurrentPattern(indexOfPattern);
  }, [indexOfPattern]);
  const pattern = patternWithoutAdaptive.current.filter(
    isValidPositionForImage
  );

  useEffect(() => {
    arrayOfImagesOnThisStep.current = getArrayOfImagesOnThisStep(
      7,
      arrayOfImages
    );
  }, [indexOfPattern, arrayOfImages]);

  const [isAppearance, setAppearance] = useState(false);
  const isVisible = isValidPositionFn(pattern);
  const getStep = getStepFn(pattern);

  useEffect(() => {
    const setNumdersOfAvaleblePositionsEventFunction = () =>
      setNumdersOfAvaleblePositions(getNumdersOfAvaleblePositions());

    setNumdersOfAvaleblePositionsEventFunction();

    window.addEventListener(
      "resize",
      setNumdersOfAvaleblePositionsEventFunction
    );

    return () => {
      window.removeEventListener(
        "resize",
        setNumdersOfAvaleblePositionsEventFunction
      );
    };
  }, []);

  useEffect(() => {
    if (!arrayOfImages) return;
    setPlayAnimation(true);

    const interval = setInterval(() => {
      setAppearance((prevApearenceState) => {
        if (prevApearenceState) {
          setIndexOfPattern((prevIndexOfPatternState) => {
            if (prevIndexOfPatternState < pattern.length - 2) {
              return prevIndexOfPatternState + 1;
            } else {
              return 0;
            }
          });
        }
        return !prevApearenceState;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GridWrapper {...props}>
      <GridInner>
        {getArrayOfIndex(80).map((item) => (
          <Cell key={item}>
            {isPlayAnimation && isValidPositionForImage(item) && (
              <CellImage
                step={getStep(item)}
                isVisible={isAppearance && isVisible(item)}
                image={arrayOfImagesOnThisStep.current[getStep(item)]}
              />
            )}
          </Cell>
        ))}
      </GridInner>
    </GridWrapper>
  );
};
