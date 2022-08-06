import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from "react-dom";
const Portal = ({children, ...props}) => {
    //TODO: Я пока не знаю как тут обработать опциональные пропсы. Нужны ли они вообще для портала?
    const containerRef = useRef(null);

    useEffect(() => {
        const container = document.createElement('div');
        containerRef.current = container;
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [])

    return containerRef.current ? createPortal(children, containerRef.current) : null;
};

export default Portal;
