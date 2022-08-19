import React from 'react';
import {useCursor, useVH} from "utils";
import {useGlide} from "./utils";
import {PropTypes} from "prop-types";
import {SliderItem} from "./slider-item";
import {Caption, H3} from "components";
import {Tape} from "./tape";
import {
    ContentMain,
    ContentFooter,
    SliderContent,
    SliderSlides,
    SliderTrack,
    SliderWrapper,
    NavBullets, NavBullet, RightCol, LeftCol,
    cursorSliderStyle
} from "./slider.style";

export const Slider = ({slides}) => {
    const currentSlide = useGlide();
    useVH();
    useCursor({className: cursorSliderStyle});

    return (
        <SliderWrapper className="glide">
            <SliderTrack className="glide__track" data-glide-el="track">
                <SliderSlides className="glide__slides">
                    {slides.map((slide) => (
                        <SliderItem key={slide.poster} {...slide}/>
                    ))}
                </SliderSlides>
                <SliderContent>
                    <ContentMain>
                        <Tape color="white" mb="md" currentIndex={currentSlide} titles={slides}/>
                        <NavBullets className="glide__bullets" data-glide-el="controls[nav]">
                            {slides.map((_, index) => (
                                <NavBullet key={`glide__bullet_${index}`} className="glide__bullet js-num"
                                           data-glide-dir={`=${index}`} data-cursor-sticky>
                                    {(index + 1).toString().padStart(2, '0')}
                                </NavBullet>
                            ))}
                        </NavBullets>
                    </ContentMain>
                    <ContentFooter>
                        <LeftCol>
                            <Caption color="white" mb="xxsm">
                                Client
                            </Caption>
                            <H3 color="white">
                                Archangel Studios
                            </H3>
                        </LeftCol>
                        <RightCol>
                            <Caption color="white" mb="xxsm">
                                Colourist
                            </Caption>
                            <H3 color="white">
                                JACK MCGINITY
                            </H3>
                        </RightCol>
                    </ContentFooter>
                </SliderContent>
            </SliderTrack>
        </SliderWrapper>
    );
};

Slider.propTypes = {
    slides: PropTypes.object.isRequired,
}
