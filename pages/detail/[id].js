import React from 'react'
import {
  DetailTitle,
  Slider,
  Footer,
  Stakeholders,
  VideoPlayer,
  Header,
} from 'components'
import styled from '@emotion/styled'
import { sizes, breakpointsWidth } from 'styles'
import { useRouter } from 'next/router'
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

const DetailCardPage = ({data}) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <MainComponent>
        <DetailTitle title="Balkan line" year="2021" py="lg" />
        <Slider slides={data} isSimpleMode />
        <Stakeholders
          mt="md"
          mb="xlg"
          client="Archangel Studios"
          colourist="JACK MCGINITY"
          director="OZZIE PULLIN"
          dop="ANDRIC WATSON"
        />
        <VideoPlayer />
      </MainComponent>
      <Footer pt="xlg" />
    </>
  )
}

export default DetailCardPage

export async function getServerSideProps(context) {
  let data = null
  try {
    data = (await getContent(`projects/${context.params.id}`)) || {}
  } catch (e) {
    data = {}
  }

  return {
    props: { data },
  }
}
