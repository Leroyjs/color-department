import React, {useRef} from 'react';
import {debounce, clamp} from "utils";
import {Item, LabelEnd, LabelStart, PopOver} from "./awards-list.style";

export const AwardsItem = ({modalId, startLabel, endLabel, img, onClick, ...props}) => {
    const popOverRef = useRef();

    function handleEnter() {
        const optionContainerEl = popOverRef.current;
        if (!optionContainerEl) return;
        optionContainerEl.classList.add('isShow');
    }

    function handleLeave() {
        const optionContainerEl = popOverRef.current;

        if (optionContainerEl?.classList.contains('isShow')) {
            optionContainerEl.classList.remove('isShow');
        }
    }

    const handleMove = debounce((e) => {
        const target = e.target;
        const popOver = popOverRef.current;

        if (!popOver || !target) return;

        const rectTarget = target.getBoundingClientRect();
        const rectPopOver = popOver.getBoundingClientRect();

        const startX = rectPopOver.width / 2;
        const endX = rectTarget.width - rectPopOver.width / 2;

        const x = clamp(e.clientX - rectTarget.left, startX, endX);
        const y = e.clientY - rectTarget.top;

        popOver?.setAttribute('style', `transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`);
    }, 10)

    return (
        <Item onMouseEnter={handleEnter} onMouseMove={handleMove} onMouseLeave={handleLeave} onClick={() => onClick?.(modalId)} {...props}>
            <LabelStart>
                {startLabel}
            </LabelStart>
            <LabelEnd>
                {endLabel}
            </LabelEnd>
            <PopOver src={img} ref={popOverRef} />
        </Item>
    );
};
