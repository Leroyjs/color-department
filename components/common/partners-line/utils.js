import { getGridCount } from "styles";

export const initStepCounter = (setStepIndex, pathArray, setImageArray) => {
    const gridCount = getGridCount();
    if (pathArray.length < gridCount) {
        const additionPath = [...pathArray]
        while (additionPath.length < gridCount) {
            additionPath.push(...pathArray)
        }
        setImageArray([...additionPath, ...additionPath])
    } else {
        setImageArray([...pathArray, ...pathArray])
    }


    const interval = setInterval(() => {
        setStepIndex((prevIndex) => {
            if (prevIndex === pathArray.length) return 0;
            return prevIndex + 1;
        });
    }, 4000);

    return () => {
        clearInterval(interval);
    };
};
