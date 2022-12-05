import styled from '@emotion/styled'
import {
  DetailTitle,
  Footer,
  Header,
  Slider,
  Stakeholders,
  VideoPlayer,
  WorksCards,
} from 'components'
import { breakpointsWidth, sizes } from 'styles'
import { getContent } from '../../utils'
import React from 'react'

const MainComponent = styled.main`
  padding-top: ${sizes['desktopLG'].half};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    padding-top: ${sizes['tabletLG'].thirdX2};
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: ${sizes['tabletLG'].x1};
  }
`

const DetailCardPage = ({
  title,
  year,
  credentials,
  photos,
  common,
  video,
  coloristProjects,
  preview,
}) => {
  return (
    <>
      <Header common={common} isBorder />
      <MainComponent>
        <DetailTitle title={title} year={year} py="lg" />
        <Slider slides={photos} isSimpleMode />
        <Stakeholders
          mt="md"
          mb="xlg"
          client={credentials.client}
          colourist={credentials.colorist}
          director={credentials.director}
          dop={credentials.other}
        />
        <VideoPlayer preview={preview} videoId={video} />
      </MainComponent>
      {coloristProjects?.length && (
        <WorksCards
          title={`${
            credentials.colorist?.split(' ')?.[0] || credentials.colorist
          }’s cases`}
          cards={coloristProjects}
        />
      )}
      <Footer common={common} pt="xlg" />
    </>
  )
}

export default DetailCardPage

export async function getServerSideProps(context) {
  try {
    const {
      data: { projects },
    } = await getContent('projects')
    const currentId = context.params.id
    const data = await getContent(`projects/${currentId}`)
    const currentColorist = data.credentials?.colorist

    const coloristProjects = projects
      .filter(
        ({ colorist, id }) => currentColorist === colorist && currentId != id
      )
      ?.slice(0, 4)

    return {
      props: { ...data, coloristProjects },
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
