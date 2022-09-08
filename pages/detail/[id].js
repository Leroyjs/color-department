import styled from '@emotion/styled'
import {
  DetailTitle, Footer, Header, Slider, Stakeholders,
  VideoPlayer
} from 'components'
import { breakpointsWidth, sizes } from 'styles'
import { getContent } from '../../utils'

const MainComponent = styled.main`
  padding-top: ${sizes['desktopLG'].half};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    padding-top: ${sizes['tabletLG'].thirdX2};
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: ${sizes['tabletLG'].x1};
  }
`

const DetailCardPage = ({ title, year, client, colourist, director, dop, photos }) => {
  return (
    <>
      <Header />
      <MainComponent>
        <DetailTitle title={title} year={year} py="lg" />
        <Slider slides={photos} isSimpleMode />
        <Stakeholders
          mt="md"
          mb="xlg"
          client={client}
          colourist={colourist}
          director={director}
          dop={dop}
        />
        <VideoPlayer />
      </MainComponent>
      <Footer pt="xlg" />
    </>
  )
}

export default DetailCardPage

export async function getServerSideProps(context) {
  const detailViewModel = {
    title: '',
    year: '',
    client: '',
    colourist: '',
    director: '',
    dop: '',
    photos: []
  }
  try {
    const data = (await getContent(`projects/${context.params.id}`)) || {}
    detailViewModel.title = detailViewModel.title || data.title;
    detailViewModel.year = detailViewModel.year || data.year;
    detailViewModel.client = detailViewModel.client || data.credentials?.client;
    detailViewModel.colourist = detailViewModel.colourist || data.credentials?.colorist;
    detailViewModel.director = detailViewModel.director || data.credentials?.director;
    detailViewModel.dop = detailViewModel.dop || data.credentials?.other;
    detailViewModel.photos = detailViewModel.photos || data.photos;

  } catch (e) {

  }

  return {
    props: { ...detailViewModel },
  }
}
