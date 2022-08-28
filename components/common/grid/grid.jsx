import { Cell, CellImage, GridInner, GridWrapper } from "./grid.style";
import { useEffect, useRef, useState } from "react";

import { getArrayOfIndex } from "styles";

const patternsDesctop = [
  [57, 52, 61, 63, 67],
  [59, 49, 69, 62, 71],
  [57, 52, 61, 63, 67],
  [59, 49, 69, 62, 71],
];

const patternsTablet = [
  [57, 52, 61, 63, 67],
  [59, 49, 69, 62, 71],
  [57, 52, 61, 63, 67],
  [59, 49, 69, 62, 71],
];

const getCurrentPattern = (index) => {
  const currentDictionary = window.matchMedia("(min-width: 1024px)").matches
    ? patternsDesctop
    : patternsTablet;

  return currentDictionary[index];
};

const getStepFn = (pattern) => (indexOfPosition) =>
  pattern.indexOf(indexOfPosition) !== -1
    ? pattern.indexOf(indexOfPosition)
    : 0;

const getNumdersOfAvaleblePositions = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const countOfColums = window.matchMedia("(min-width: 1024px)").matches
    ? 8
    : 4;
  const sizeOfCell = windowWidth / countOfColums;
  const headerHeight = document
    .querySelector(".header-main")
    .getBoundingClientRect().height;

  const countOfFreeRows = Math.floor(
    (windowHeight - headerHeight) / sizeOfCell - 1
  );

  const maxNumberOfCell = 79 - countOfColums;
  const minNumberOfCell = maxNumberOfCell - countOfFreeRows * countOfColums + 1;

  const numdersOfAvaleblePositions = [];

  for (let index = minNumberOfCell; index <= maxNumberOfCell; index++) {
    numdersOfAvaleblePositions.push(index);
  }

  return numdersOfAvaleblePositions;
};

let lastIndexOfImage = 0;

const getArrayOfImagesOnThisStep = (
  countOfImagesOnThisPattern,
  arrayOfImages = []
) => {
  const arrayOfImagesOnThisStep = [];

  const getCurrentIndex = (index) => index % arrayOfImages.length;

  for (
    let index = lastIndexOfImage;
    index < countOfImagesOnThisPattern + lastIndexOfImage;
    index++
  ) {
    arrayOfImagesOnThisStep.push(arrayOfImages[getCurrentIndex(index)]);
  }

  console.log(
    "dfvd",
    lastIndexOfImage,
    countOfImagesOnThisPattern,
    arrayOfImages.length,
    getCurrentIndex(lastIndexOfImage + countOfImagesOnThisPattern)
  );

  lastIndexOfImage = getCurrentIndex(
    lastIndexOfImage + countOfImagesOnThisPattern
  );

  return arrayOfImagesOnThisStep;
};

const isValidPositionFn = (numdersOfPositions) => (indexOfPosition) =>
  numdersOfPositions.indexOf(indexOfPosition) !== -1;

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

  const [isApearence, setApearence] = useState(false);
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
      setApearence((prevApearenceState) => {
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
                isVisible={isApearence && isVisible(item)}
                image={arrayOfImagesOnThisStep.current[getStep(item)]}
              />
            )}
          </Cell>
        ))}
      </GridInner>
    </GridWrapper>
  );
};
