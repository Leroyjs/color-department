import { Grid, RunningLine } from 'components'
import { useVH } from 'utils'
import {
  ContentWrapper,
  FlexLayerWrapper,
  RunningLineStyle,
  StartScreenWrapper,
} from './start-screen.style'
import { EmbedVideo } from '../../common'

export const StartScreen = ({ running_line, promo_video }) => {
  useVH()

  return (
    <StartScreenWrapper>
      <FlexLayerWrapper>
        <ContentWrapper>
          <EmbedVideo promo_video={promo_video} />
          <Grid />
          <RunningLine titles={running_line} className={RunningLineStyle} />
        </ContentWrapper>
      </FlexLayerWrapper>
    </StartScreenWrapper>
  )
}
