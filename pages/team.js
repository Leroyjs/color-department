import { useState } from 'react'
import Parser from 'html-react-parser'
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
import { colors } from 'styles'
import {
  getAvatars,
  getContent,
  getEmployeeModal,
  getSlides,
  getSlidesTeam,
} from '../utils'

const Team = ({
  common,
  avatars,
  title_team,
  running_line,
  subtitle_project,
  slides,
  employees,
  modals,
}) => {
  const [isOpen, setOpen] = useState(false)
  const [currentModalId, setCurrentModalId] = useState(-1)
  return (
    <>
      <Preloader running_line={running_line} />
      <Header common={common} isBorder />
      <PhotoStartScreen arrayOfImages={avatars} title={title_team} />
      <main style={{ backgroundColor: colors.black }}>
        <IntroAboutTextBlock pt="xlg" />
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
          {Parser(String(subtitle_project))}
        </PreTitleSlider>
        <Slider slides={slides} />
        <RunningLineLink
          mt="lg"
          outline={'true'}
          link={'/letstalk'}
          titles={['LET’S TALK', 'LET’S TALK', 'LET’S TALK']}
        />
        <DetailCardModal
          {...modals[currentModalId]}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      </main>
      <Footer common={common} pt="xlg" />
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await getContent('team')
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
    title_team,
    running_line = [],
    subtitle_project,
    common,
    employees,
  } = data

  return {
    props: {
      common,
      running_line,
      employees: Object.entries(employees),
      modals: getEmployeeModal(Object.entries(employees)),
      avatars: getAvatars(Object.entries(employees)),
      title_team,
      subtitle_project,
      slides: getSlides(projectsRes.data.projects),
    },
  }
}

export default Team
