import React, {useRef} from 'react'
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
import {colors} from 'styles'
import {getAwards, getContent, getSlides} from '../utils'

const Home = ({
                  running_line,
                  promo_subtitle,
                  promo_hints,
                  title_project,
                  promo_video,
                  clients,
                  awards,
                  slides,
                  common
              }) => {
    const videoContant = useRef(null)

    return (
        <>
            <Preloader/>
            <Header common={common} transparentToComponent={videoContant}/>
            <StartScreen/>
            <main ref={videoContant} style={{backgroundColor: colors.black}}>
                <IntroMainTextBlock/>
                <PartnersLine partners={clients}/>
                <Slider
                    slides={slides}
                    title={
                        <span>
              Our work worthy of your <br/> attention
            </span>
                    }
                />
                <AwardMainTextBlock mt="xlg" px="md"/>
                <Popovers options={awards} title="Our Awards" isAboutImg={false}/>
            </main>
            <Footer common={common} pt="xlg"/>
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

    const {running_line, promo_subtitle, promo_hints, title_project, promo_video, clients, projects, common} = data
    const slides = getSlides(projects)
    const awards = getAwards(data.awards)

    return {
        props: {running_line, promo_subtitle, promo_hints, title_project, promo_video, clients, awards, slides, common},
    }
}
