import React, {useEffect, useRef} from 'react';
import {createPortal} from "react-dom";

export const Portal = ({children}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = document.createElement('div');
        containerRef.current = container;
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [])

    return containerRef.current ?
        createPortal(children, containerRef.current) :
        null;
};
