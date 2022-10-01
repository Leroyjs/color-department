import React, { useRef, useState } from 'react'
import Parser from 'html-react-parser'
import { Caption } from 'components'
import {
  AllSlides,
  CaptionCopyright,
  ContentFooter,
  ContentFooterPhone,
  ContentMain,
  ContentTitle,
  ContentTitlePhone,
  CopyrightItem,
  CopyrightList,
  CurrentSlide,
  LeftCol,
  NavBullet,
  NavBullets,
  NavFooterPhone,
  NavPoint,
  NavPoints,
  RightCol,
  SliderContent,
  SliderSlides,
  SliderTrack,
  SliderWrapper,
} from './slider.style'
import { Cursor, Next, Prev } from './slider-item.style'

import { PropTypes } from 'prop-types'
import { SliderItem } from './slider-item'
import { Tape } from './tape'
import { useGlide } from './utils'
import { useVH } from 'utils'
import { withCursor } from 'utils'

const SliderWithoutCursor = ({
  slides,
  title,
  isSimpleMode = false,
  autoplay = 6000,
  hoverpause = false,
}) => {
  const { currentSlide } = useGlide(autoplay, hoverpause)
  const [cursorText, setText] = useState('')

  const cursor = useRef(null)

  const handleMove = (type) => (e) => {
    cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    cursor.current.style.opacity = 1
    setText(type)
  }

  const handleCursorLeave = () => {
    cursor.current.style.opacity = 0
  }

  useVH()

  return (
    <>
      {title && <ContentTitlePhone>{Parser(String(title))}</ContentTitlePhone>}
      <SliderWrapper className="glide">
        <SliderTrack className="glide__track" data-glide-el="track">
          <SliderSlides className="glide__slides">
            {slides.map((slide, index) => (
              <SliderItem
                key={slide.preview + index}
                {...slide}
                slideImg={typeof slide === 'string' ? slide : null}
                isPlayed={currentSlide === index}
              />
            ))}
          </SliderSlides>
          <div className="glide__arrows" data-glide-el="controls">
            <Prev
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
              onMouseLeave={handleCursorLeave}
              onMouseMove={handleMove('prev')}
            />
            <Next
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
              onMouseLeave={handleCursorLeave}
              onMouseMove={handleMove('next')}
            />
          </div>
          <SliderContent p="md">
            {isSimpleMode ? (
              <>
                <NavPoints
                  className="glide__bullets"
                  data-glide-el="controls[nav]"
                >
                  {slides.map((_, index) => (
                    <NavPoint
                      key={`glide__bullet_${index}`}
                      className="glide__bullet js-num"
                      data-glide-dir={`=${index}`}
                      {...(currentSlide !== index
                        ? { 'data-pointer': true }
                        : {})}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </NavPoint>
                  ))}
                </NavPoints>
                <NavFooterPhone>
                  <CurrentSlide>
                    {(currentSlide + 1).toString().padStart(2, '0')}
                  </CurrentSlide>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M1 1L25 25" stroke="white" />
                  </svg>
                  <AllSlides>{slides.length}</AllSlides>
                </NavFooterPhone>
              </>
            ) : (
              <>
                {title && <ContentTitle>{Parser(String(title))}</ContentTitle>}
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
                        {...(currentSlide !== index
                          ? { 'data-pointer': true }
                          : {})}
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </NavBullet>
                    ))}
                  </NavBullets>
                </ContentMain>
                <NavFooterPhone>
                  <CurrentSlide>
                    {(currentSlide + 1).toString().padStart(2, '0')}
                  </CurrentSlide>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M1 1L25 25" stroke="white" />
                  </svg>
                  <AllSlides>{slides.length}</AllSlides>
                </NavFooterPhone>
                <ContentFooter>
                  <LeftCol className="desktop">
                    <CaptionCopyright color="white" mb="xxsm">
                      Client
                    </CaptionCopyright>
                    <CopyrightList>
                      {slides.map(({ client }, index) => (
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
                  <RightCol className="desktop">
                    <CaptionCopyright color="white" mb="xxsm">
                      Colourist
                    </CaptionCopyright>
                    <CopyrightList>
                      {slides.map(({ colourist }, index) => (
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
      {!isSimpleMode && (
        <ContentFooterPhone px="md">
          <LeftCol>
            <CaptionCopyright color="white" mb="xxsm">
              Client
            </CaptionCopyright>
            <CopyrightList>
              {slides.map(({ client }, index) => (
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
            <CaptionCopyright color="white" mb="xxsm">
              Colourist
            </CaptionCopyright>
            <CopyrightList>
              {slides.map(({ colourist }, index) => (
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
        </ContentFooterPhone>
      )}
    </>
  )
}

export const Slider = withCursor(SliderWithoutCursor)

Slider.propTypes = {
  slides: PropTypes.object.isRequired,
  autoplay: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  hoverpause: PropTypes.bool,
  isSimpleMode: PropTypes.bool,
}
