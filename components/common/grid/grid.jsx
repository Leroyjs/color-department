import { Cell, CellImage, GridInner, GridWrapper } from "./grid.style";
import { useEffect, useState } from "react";

import { getArrayOfIndex } from "styles";

const patternsDesctop = [
  [57, 52, 61, 63, 67],
  [59, 49, 69, 62, 71],
  [57, 52, 61, 63, 67],
  [59, 49, 69, 62, 71],
];

const getStepFn = (pattern) => (indexOfPosition) =>
  pattern.indexOf(indexOfPosition) !== -1
    ? pattern.indexOf(indexOfPosition)
    : 0;

const getNumdersOfAvaleblePositions = () => {
  // const windowWidth = window.innerWidth;
  // const windowHeight = window.innerHeight;

  return [
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
    67, 68, 69, 70, 71,
  ];
};

const isValidPositionFn = (numdersOfPositions) => (indexOfPosition) =>
  numdersOfPositions.indexOf(indexOfPosition) !== -1;

export const Grid = ({props, arrayOfImages}) => {
  const [indexOfPattern, setIndexOfPattern] = useState(0);
  const pattern = patternsDesctop[indexOfPattern];
  const [isPlayAnimation, setPlayAnimation] = useState(false);
  const isValidPositionForImage = isValidPositionFn(
    getNumdersOfAvaleblePositions()
  );
  const [isApearence, setApearence] = useState(true);
  const isVisible = isValidPositionFn(pattern);
  const getStep = getStepFn(pattern);

  useEffect(() => {
    if(!arrayOfImages) return;
    setPlayAnimation(true);
    
    const interval = setInterval(() => {
      setApearence((prevApearenceState) => {
        if (!prevApearenceState) {
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
                isVisible={isApearence && isVisible(item)}
                image="https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg"
              />
            )}
          </Cell>
        ))}
      </GridInner>
    </GridWrapper>
  );
};
