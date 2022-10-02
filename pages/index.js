import React, { useRef } from 'react'
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
import { getAwards, getContent, getSlides } from '../utils'

const Home = ({
  running_line,
  promo_subtitle,
  promo_hints,
  title_project,
  promo_video,
  clients,
  awards,
  slides,
  common,
}) => {
  const videoContant = useRef(null)

  return (
    <>
      <Preloader running_line={running_line} />
      <Header common={common} transparentToComponent={videoContant} />
      <StartScreen running_line={running_line} promo_video={promo_video} />
      <main ref={videoContant} style={{ backgroundColor: colors.black }}>
        <IntroMainTextBlock
          promo_subtitle={promo_subtitle}
          promo_hints={promo_hints}
        />
        <PartnersLine partners={clients} />
        <Slider slides={slides} title={title_project} />
        <AwardMainTextBlock mt="xlg" px="md" />
        <Popovers options={awards} title="Our Awards" isAboutImg={false} />
      </main>
      <Footer common={common} pt="xlg" />
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

  const {
    running_line,
    promo_subtitle,
    promo_hints,
    title_project,
    promo_video,
    clients,
    projects,
    common,
  } = data

  const slides = getSlides(projects)
  const awards = getAwards(data.awards)

  return {
    props: {
      running_line,
      promo_subtitle,
      promo_hints,
      title_project,
      promo_video,
      clients,
      awards,
      slides,
      common,
    },
  }
}
