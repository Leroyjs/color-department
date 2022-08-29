import { useEffect, useRef, useState } from "react";

import Glide from "@glidejs/glide";
import { SliderSlides } from "./slider.style";

export function useGlide(autoplay, hoverpause) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const glide = useRef();

  useEffect(() => {
    glide.current = new Glide(".glide", {
      type: "carousel",
      gap: 0, autoplay, hoverpause,
      classes: {
        nav: {
          active: "active",
        },
      },
    })
      .mutate([SlideComponent])
      .mount();

        glide.current.on("run.after", () => {
            setCurrentSlide(glide.current.index);
        });
    }, []);

  return {
    currentSlide,
    next: () => glide.current.go(">"),
    prev: () => glide.current.go("<"),
  };
}

function getClassName(symbol) {
  return symbol.toString().replace(".", "");
}

function SlideComponent(Glide, Components, Events) {
  const sliderSlidesClass = `${getClassName(SliderSlides)}--reverse`;
  let previousIndex = 0;

    Glide?.on('run.before', (evt) => {
        const slidesEls = Glide && Glide._c.Html.slides;
        const dirClass = evt.direction === '>' && Glide.index < slidesEls.length ? 'right' : 'left';

        slidesEls[Glide.index].classList.add(dirClass);
    })

    Glide?.on('run.after', (evt) => {
        const slidesEls = Glide && Glide._c.Html.slides;
        const dirClass = evt.direction === '>' ? 'right' : 'left';

        slidesEls[Glide.index].classList.remove(dirClass);
    })

    return {
        modify(translate) {
            if (!Glide) return 0;

      const i = Glide.index;
      const prevI = previousIndex;

      previousIndex = i;

      if (i === prevI) {
        return 0;
      } else if (
        (Math.abs(i - prevI) === 1 && i > prevI) ||
        (i === 0 && prevI === Glide._c.Html.slides.length - 1)
      ) {
        Glide._c.Html.wrapper.classList.remove(sliderSlidesClass);
      } else {
        Glide._c.Html.wrapper.classList.add(sliderSlidesClass);
      }

      return 0;
    },
  };
}
