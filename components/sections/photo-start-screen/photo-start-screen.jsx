import Parser from 'html-react-parser'
import { Grid, RunningLine } from 'components'
import { useVH } from 'utils'
import {
  ContentWrapper,
  FlexLayerWrapper,
  PhotoStartScreenWrapper,
  RunningLineStyle,
  Title,
} from './photo-start-screen.style'

export const PhotoStartScreen = ({ arrayOfImages, title }) => {
  useVH()
  return (
    <PhotoStartScreenWrapper>
      <FlexLayerWrapper>
        <ContentWrapper>
          <Title>{Parser(title || '')}</Title>
          <Grid arrayOfImages={arrayOfImages} withWolf />
          <RunningLine className={RunningLineStyle} />
        </ContentWrapper>
      </FlexLayerWrapper>
    </PhotoStartScreenWrapper>
  )
}
