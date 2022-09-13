import {useState} from 'react'
import {
    Popovers,
    Preloader,
    Footer,
    Header,
    IntroAboutTextBlock,
    PhotoStartScreen,
    PreTitleSlider,
    RunningLineLink,
    DetailCardModal,
    Slider,
} from 'components'
import {colors} from 'styles'
import {getAvatars, getContent, getSlides} from '../utils'

const Team = ({common, avatars, title_team, subtitle_project, slides, employees}) => {
    const [isOpen, setOpen] = useState(false)
    const [currentModalId, setCurrentModalId] = useState(-1)

    return (
        <>
            <Preloader/>
            <Header common={common}/>
            <PhotoStartScreen
                arrayOfImages={avatars}
                title={['We are', `${common.company_name}`]}
            />
            <main style={{backgroundColor: colors.black}}>
                <IntroAboutTextBlock pt="xlg"/>

                {employees.map(([subtitle, options], index) => {
                    if (index === 0)
                        return (
                            <Popovers
                                key={subtitle}
                                options={options}
                                subtitle={subtitle}
                                title="We are bold"
                                mt="xlg"
                                mb="lg"
                                onClick={(modalId) => {
                                    setCurrentModalId(modalId)
                                    setOpen(true)
                                }}
                            />
                        )

                    return (
                        <Popovers
                            key={subtitle}
                            options={options}
                            subtitle={subtitle}
                            mt="lg"
                            onClick={(modalId) => {
                                setCurrentModalId(modalId)
                                setOpen(true)
                            }}
                        />
                    )
                })}
                <PreTitleSlider mt="xlg" mb="md">
                    {subtitle_project}
                </PreTitleSlider>
                <Slider slides={slides}/>
                <RunningLineLink
                    mt="lg"
                    outline={'true'}
                    link={'/order'}
                    titles={['LET’S TALK', 'LET’S TALK', 'LET’S TALK']}
                />
                <DetailCardModal
                    isOpen={isOpen}
                    setOpen={setOpen}
                    modalId={currentModalId}
                />
            </main>
            <Footer common={common} pt="xlg"/>
        </>
    )
}

export async function getServerSideProps(context) {
    const data = await getContent('team');

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    const {title_team, subtitle_project, common, employees, projects} = data;
    return {
        props: {
            common,
            employees: Object.entries(employees),
            avatars: getAvatars(Object.entries(employees)),
            title_team,
            subtitle_project,
            slides: getSlides(projects)
        },
    }
}

export default Team
