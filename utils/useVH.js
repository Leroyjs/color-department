import {useCallback, useEffect, useState} from 'react';

//TODO: Техдолг. Реализация так себе, но работает как часы. Переписать нормально, когда будет время

const VARIABLE_NAME = '--fsvh';

const getActualVh = () => Number((window.innerHeight * 0.01).toFixed(2));

let count = 0;

export const useVH = () => {
    const [vh, setVh] = useState(0);
    const updateVh = useCallback(() => {
        const newVh = getActualVh();

        document.documentElement.style.setProperty(VARIABLE_NAME, `${newVh}px`);
        setVh(newVh);
    }, [setVh]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            count += 1;

            updateVh();

            window.addEventListener('resize', updateVh);
        }
        return () => {
            window.removeEventListener('resize', updateVh);

            count -= 1;

            if (count === 0) {
                document.documentElement.style.removeProperty(VARIABLE_NAME);
            }
        };
    }, [updateVh]);

    return vh;
};
