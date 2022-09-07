import React, { useRef, useEffect, useState } from 'react'
import {
  AwardMainTextBlock,
  Footer,
  Header,
  IntroMainTextBlock,
  PartnersLine,
  Slider,
  StartScreen,
  Preloader,
  Popovers,
} from 'components'
import { colors } from 'styles'
import { getContent, getSlides } from '../utils'

const DEMO_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
const awardsItems = [
  {
    href: '/',
    startLabel: 'D&AD',
    endLabel: 'Balkan line',
    img: 'https://www.fillmurray.com/400/400',
  },
  {
    href: '/',
    startLabel: 'CANNES LIONS',
    endLabel: 'El corte ingles',
    img: 'https://placebeard.it/400/400',
  },
  {
    href: '/',
    startLabel: 'WEBBY',
    endLabel: 'Zolla',
    img: 'https://www.placecage.com/400/400',
  },
  {
    href: '/',
    startLabel: 'ONE SHOW',
    endLabel: 'Lil pump',
    img: 'https://www.stevensegallery.com/400/400',
  },
]

const Home = ({ clients, awards, slides }) => {
  const videoContant = useRef(null)

  return (
    <>
      <Preloader />
      <Header transparentToComponent={videoContant} />
      <StartScreen />
      <main ref={videoContant} style={{ backgroundColor: colors.black }}>
        <IntroMainTextBlock />
        <PartnersLine partners={clients} />
        <Slider
          slides={slides}
          title={
            <span>
              Our work worthy of your <br /> attention
            </span>
          }
        />
        <AwardMainTextBlock mt="xlg" px="md" />
        <Popovers options={awardsItems} title="Our Awards" isAboutImg={false} />
      </main>
      <Footer pt="xlg" />
    </>
  )
}

export default Home

export async function getServerSideProps(context) {
  const data = await getContent('home')

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const { clients, awards, projects } = data
  const slides = getSlides(projects)

  return {
    props: { clients, awards, projects, slides },
  }
}
