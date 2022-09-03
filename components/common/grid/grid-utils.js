const patternsDesktop = {
    row1: [
        [64, 69, 66, 71, 67],
        [66, 68, 70, 64, 71],
        [67, 68, 65, 70, 69],
        [64, 66, 68, 70, 71],
    ],
    row2: [
        [56, 66, 60, 70, 63],
        [67, 61, 58, 70, 56],
        [65, 58, 68, 61, 71],
        [59, 70, 66, 56, 63]
    ],
    row3: [
        [57, 52, 61, 63, 67],
        [59, 49, 69, 62, 71],
        [57, 52, 61, 63, 67],
        [59, 49, 69, 62, 71],
    ],
    row4: [
        [57, 41, 61, 63, 67],
        [59, 49, 69, 46, 71],
        [57, 52, 61, 63, 40],
        [59, 49, 69, 62, 71],
    ],
    row5: [
        [57, 41, 61, 63, 46],
        [59, 49, 41, 46, 71],
        [57, 52, 61, 35, 40],
        [59, 49, 69, 62, 38],
    ],
    default: [
        [57, 41, 61, 63, 46],
        [59, 49, 41, 46, 71],
        [57, 52, 61, 35, 40],
        [59, 49, 69, 62, 38],
    ],

}

/**
 * Таблет
 * [67;64] - третй ряд
 * [71;68] - второй ряд
 * [75;72] - первый ряд 
 */
const patternsTablet = {
    row1: [
        [75, 73, 74, 72],
        [73, 73, 72, 75],
        [75, 74, 73, 72],
        [72, 73, 74, 75],
    ],
    row2: [
        [74, 68, 73, 71],
        [70, 75, 68, 73],
        [71, 75, 69, 73],
        [73, 70, 68, 71],
    ],
    row3: [
        [74, 68, 73, 64],
        [70, 66, 68, 73],
        [65, 75, 69, 73],
        [73, 70, 66, 71],
    ],
    row4: [
        [61, 71, 64, 72],
        [67, 74, 61, 68],
        [69, 60, 71, 67],
        [62, 73, 71, 60],
    ],
    row5: [
        [57, 71, 64, 59],
        [67, 74, 61, 68],
        [69, 58, 56, 67],
        [62, 73, 71, 60],
    ],
    default: [
        [57, 71, 64, 55],
        [67, 54, 61, 68],
        [69, 58, 56, 67],
        [62, 53, 71, 60],
    ]

}

export const getCurrentPattern = (index) => {
    const { rows, columns } = getAmountOfColumRow()
    
    //ключ к patternsTablet row5 row4 row3 ...
    const rowKey = `row${rows}`;
    
    const pattern = columns > 4 ? patternsDesktop : patternsTablet;
    return (pattern[rowKey] || pattern.default)[index];
};

export const getStepFn = (pattern) => (indexOfPosition) =>
    pattern.indexOf(indexOfPosition) !== -1
        ? pattern.indexOf(indexOfPosition)
        : 0;


export const getNumdersOfAvaleblePositions = () => {

    const { rows, columns } = getAmountOfColumRow();
    const maxNumberOfCell = 79 - columns;

    const minNumberOfCell = maxNumberOfCell - rows * columns + 1;

    const numdersOfAvaleblePositions = [];

    for (let index = minNumberOfCell; index <= maxNumberOfCell; index++) {
        numdersOfAvaleblePositions.push(index);
    }

    return numdersOfAvaleblePositions;
};

const getAmountOfColumRow = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const countOfColums = window.matchMedia("(max-width: 1024px)").matches
        ? 4
        : 8;
    const sizeOfCell = windowWidth / countOfColums;
    const headerHeight = document
        .querySelector(".header-main")
        .getBoundingClientRect().height;

    const countOfFreeRows = Math.floor(
        (windowHeight - headerHeight) / sizeOfCell - 1
    );

    return { rows: countOfFreeRows, columns: countOfColums }
}

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

/**
 * @param {*} numdersOfPositions - Индексы ячеек, в которых можно отобразить
 * изображения
 * @param {*} indexOfPosition - Индекс текущей ячейки
 * @returns (indexOfPosition) => {}
 */
export const isValidPositionFn = (numdersOfPositions) => (indexOfPosition) =>
    numdersOfPositions.indexOf(indexOfPosition) !== -1;
