import styled from '@emotion/styled'
import {
  DetailTitle,
  Footer,
  Header,
  Slider,
  Stakeholders,
  VideoPlayer,
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

const DetailCardPage = ({ title, year, credentials, photos, common }) => {
  return (
    <>
      <Header common={common} />
      <MainComponent>
        <DetailTitle title={title} year={year} py="lg" />
        <Slider slides={photos} isSimpleMode />
        <Stakeholders
          mt="md"
          mb="xlg"
          client={credentials.client}
          colourist={credentials.colourist}
          director={credentials.director}
          dop={credentials.other}
        />
        <VideoPlayer />
      </MainComponent>
      <Footer common={common} pt="xlg" />
    </>
  )
}

export default DetailCardPage

export async function getServerSideProps(context) {
  try {
    const data = await getContent(`projects/${context.params.id}`)

    return {
      props: { ...data },
    }
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
