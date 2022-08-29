export const patternsDesktop = [
    [57, 52, 61, 63, 67],
    [59, 49, 69, 62, 71],
    [57, 52, 61, 63, 67],
    [59, 49, 69, 62, 71],
];

export const patternsTablet = [
    [57, 52, 61, 63, 67],
    [59, 49, 69, 62, 71],
    [57, 52, 61, 63, 67],
    [59, 49, 69, 62, 71],
];

export const getCurrentPattern = (index) => {
    const currentDictionary = window.matchMedia("(min-width: 1024px)").matches
        ? patternsDesktop
        : patternsTablet;

    return currentDictionary[index];
};

export const getStepFn = (pattern) => (indexOfPosition) =>
    pattern.indexOf(indexOfPosition) !== -1
        ? pattern.indexOf(indexOfPosition)
        : 0;

export const getNumdersOfAvaleblePositions = () => {
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

export const getArrayOfImagesOnThisStep = (
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

    lastIndexOfImage = getCurrentIndex(
        lastIndexOfImage + countOfImagesOnThisPattern
    );

    return arrayOfImagesOnThisStep;
};

export const isValidPositionFn = (numdersOfPositions) => (indexOfPosition) =>
    numdersOfPositions.indexOf(indexOfPosition) !== -1;
