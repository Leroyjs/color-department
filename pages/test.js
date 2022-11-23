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
          common={common}
          promo_subtitle={promo_subtitle}
          promo_hints={promo_hints}
        />
        <PartnersLine partners={clients} />
        {slides?.length && <Slider slides={slides} title={title_project} />}
        <AwardMainTextBlock mt="xlg" px="md" />
        {awards?.length && (
          <Popovers options={awards} title="Our Awards" isAboutImg={false} />
        )}
      </main>
      <Footer common={common} pt="xlg" />
    </>
  )
}

export default Home

export async function getServerSideProps(context) {
  const data = await getContent('home')
  const projectsRes = await getContent('projects')

  if (!data || !projectsRes) {
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
    common,
  } = data

  const slides = getSlides(projectsRes.data.projects)
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
