import {
  Footer,
  Header,
  PhotoStartScreen,
  Preloader,
  ProjectCards,
  RunningLineLink,
} from 'components'
import { colors } from 'styles'
import { getCasesPreviews, getContent, getOptionsByLabels } from '../utils'

const Projects = ({
  common,
  running_line,
  casesPreviews,
  projects = [],
  categories = [],
  genres = [],
  colourists = [],
}) => {
  return (
    <>
      <Preloader running_line={running_line} />
      <Header common={common} />
      <PhotoStartScreen arrayOfImages={casesPreviews} title={['projects']} />
      <main style={{ backgroundColor: colors.black }}>
        <ProjectCards
          projects={projects}
          categories={categories}
          genres={genres}
          colourists={colourists}
        />
        <RunningLineLink
          mt="xlg"
          outline={'true'}
          link={'/order'}
          titles={['LET’S TALK', 'LET’S TALK', 'LET’S TALK']}
        />
      </main>
      <Footer common={common} pt="xlg" />
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await getContent('projects')

  if (!response) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const { data, links } = response

  const common = data.common
  const running_line = data?.running_line || []
  const projects = data.projects
  const categories = data?.categories || []
  const genres = data?.genres || []
  const colourists = getOptionsByLabels(data.colorists)
  const casesPreviews = getCasesPreviews(data?.projects)

  return {
    props: {
      common,
      running_line,
      data,
      casesPreviews,
      projects,
      categories,
      genres,
      colourists,
    },
  }
}

export default Projects
