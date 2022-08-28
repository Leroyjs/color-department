import React, {useRef, useState} from "react";
import {Caption, H3} from "components";
import {
    ContentFooter,
    ContentMain,
    CopyrightItem,
    CopyrightList,
    LeftCol,
    NavBullet,
    NavBullets, NavPoint, NavPoints,
    RightCol,
    SliderContent,
    SliderSlides,
    SliderTrack,
    SliderWrapper,
} from "./slider.style";
import {Cursor, Next, Prev} from "./slider-item.style";

import {PropTypes} from "prop-types";
import {SliderItem} from "./slider-item";
import {Tape} from "./tape";
import {useGlide} from "./utils";
import {useVH} from "utils";
import {withCursor} from "utils";

const SliderWithoutCursor = ({slides, title, isSimpleMode = false}) => {
    const {currentSlide, next, prev} = useGlide();
    const [cursorText, setText] = useState("");

    const cursor = useRef(null);

    const handleMove = (type) => (e) => {
        cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursor.current.style.opacity = 1;
        setText(type);
    };

    const handleCursorLeave = () => {
        cursor.current.style.opacity = 0;
    };

    useVH();

    return (
        <SliderWrapper className="glide">
            <SliderTrack className="glide__track" data-glide-el="track">
                <SliderSlides className="glide__slides">
                    {slides.map((slide, index) => (
                        <SliderItem key={slide.poster} {...slide} isPlayed={currentSlide === index}/>
                    ))}
                </SliderSlides>
                <Prev
                    onClick={prev}
                    onMouseLeave={handleCursorLeave}
                    onMouseMove={handleMove("prev")}
                />
                <Next
                    onClick={next}
                    onMouseLeave={handleCursorLeave}
                    onMouseMove={handleMove("next")}
                />
                <SliderContent p="md">
                    {isSimpleMode ? (
                        <NavPoints
                            className="glide__bullets"
                            data-glide-el="controls[nav]">
                            {slides.map((_, index) => (
                                <NavPoint
                                    key={`glide__bullet_${index}`}
                                    className="glide__bullet js-num"
                                    data-glide-dir={`=${index}`}
                                    {...(currentSlide !== index ? {"data-pointer": true} : {})}
                                />
                            ))}
                        </NavPoints>
                    ) : (
                        <>
                            {title && <H3>{title}</H3>}
                            <ContentMain>
                                <Tape
                                    color="white"
                                    mb="md"
                                    currentIndex={currentSlide}
                                    titles={slides}
                                />
                                <NavBullets
                                    className="glide__bullets"
                                    data-glide-el="controls[nav]"
                                >
                                    {slides.map((_, index) => (
                                        <NavBullet
                                            key={`glide__bullet_${index}`}
                                            className="glide__bullet js-num"
                                            data-glide-dir={`=${index}`}
                                            {...(currentSlide !== index ? {"data-pointer": true} : {})}
                                        >
                                            {(index + 1).toString().padStart(2, "0")}
                                        </NavBullet>
                                    ))}
                                </NavBullets>
                            </ContentMain>
                            <ContentFooter>
                                <LeftCol>
                                    <Caption color="white" mb="xxsm">
                                        Client
                                    </Caption>
                                    <CopyrightList>
                                        {slides.map(({client}, index) => (
                                            <CopyrightItem
                                                isRight
                                                key={client}
                                                isActive={currentSlide === index}
                                            >
                                                {client}
                                            </CopyrightItem>
                                        ))}
                                    </CopyrightList>
                                </LeftCol>
                                <RightCol>
                                    <Caption color="white" mb="xxsm">
                                        Colourist
                                    </Caption>
                                    <CopyrightList>
                                        {slides.map(({colourist}, index) => (
                                            <CopyrightItem
                                                isLeft
                                                key={colourist}
                                                isActive={currentSlide === index}
                                            >
                                                {colourist}
                                            </CopyrightItem>
                                        ))}
                                    </CopyrightList>
                                </RightCol>
                            </ContentFooter>
                        </>
                    )}
                    <Cursor ref={cursor}>
                        <Caption color="white">{cursorText}</Caption>
                    </Cursor>
                </SliderContent>
            </SliderTrack>
        </SliderWrapper>
    );
};

export const Slider = withCursor(SliderWithoutCursor);

Slider.propTypes = {
    slides: PropTypes.object.isRequired,
    isSimpleMode: PropTypes.bool,
};
