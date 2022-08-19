import React, {useEffect, useState} from 'react';
import Glide from "@glidejs/glide";
import {useCursor, useVH} from "utils";
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

const DEMO_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
const demoSlides = [
    {
        title: 'El corte ingles',
        poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
    {
        title: 'Lil pump',
        poster: "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
    {
        title: 'Balkan line',
        poster: "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
    {
        title: 'Paranormal drive',
        poster: "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },

    {
        title: 'Zolla',
        poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
    {
        title: 'In the hood',
        poster: "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
    {
        title: 'projects',
        poster: "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
    {
        title: 'All categories',
        poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
    {
        title: 'All genres',
        poster: "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },

    {
        title: 'Select corourist',
        poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
        video: {
            mp4: DEMO_VIDEO
        }
    },
]

export const Slider = () => {
    const currentSlide = useGlide(demoSlides);
    useVH();
    useCursor({className: cursorSliderStyle});

    return (
        <SliderWrapper className="glide">
            <SliderTrack className="glide__track" data-glide-el="track">
                <SliderSlides className="glide__slides">
                    {demoSlides.map((slide) => (
                        <SliderItem key={slide.poster} {...slide}/>
                    ))}
                </SliderSlides>
                <SliderContent>
                    <ContentMain>
                        <Tape color="white" mb="md" currentIndex={currentSlide} titles={demoSlides}/>
                        <NavBullets className="glide__bullets" data-glide-el="controls[nav]">
                            {demoSlides.map((_, index) => (
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
                                {demoSlides.map((slide) => (
                                    <SliderItem key={slide.poster} {...slide}/>
                                ))}
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

function useGlide() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'carousel',
            gap: 0,
            classes: {
                nav: {
                    active: "active"
                }
            }
        }).mutate([SlideComponent]).mount();

        glide.on('run.after', () => {
            setCurrentSlide(glide.index);
        })
    }, [])

    return currentSlide;
}

function getClassName(symbol) {
    return symbol.toString().replace('.', '');
}

function SlideComponent(Glide, Components, Events) {
    const sliderSlidesClass = `${getClassName(SliderSlides)}--reverse`;
    let previousIndex = 0;

    return {
        modify(translate) {
            if (!Glide) return 0;

            const i = Glide.index;
            const prevI = previousIndex;

            previousIndex = i;

            if (i === prevI) {
                return 0;
            } else if ((Math.abs(i - prevI) === 1) && i > prevI || (i === 0 && prevI === Glide._c.Html.slides.length - 1)) {
                Glide._c.Html.wrapper.classList.remove(sliderSlidesClass);
            } else {
                Glide._c.Html.wrapper.classList.add(sliderSlidesClass);
            }

            return 0;
        }
    }
}
