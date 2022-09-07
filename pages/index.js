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
        <Popovers options={awards} title="Our Awards" isAboutImg={false} />
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

  const { clients, awards: rowAwards, projects } = data
  const slides = getSlides(projects)
  const awards = getAwards(rowAwards)

  return {
    props: { clients, awards, slides },
  }
}
