import {
  ContentWrapper,
  FlexLayerWrapper,
  PhotoStartScreenWrapper,
  RunningLineStyle,
  Title,
} from "./photo-start-screen.style";
import { Grid, RunningLine } from "components";
import { H2 } from "components";
import {colors} from 'styles';

export const PhotoStartScreen = ({ arrayOfImages, title }) => {
  return (
    <PhotoStartScreenWrapper>
      <FlexLayerWrapper>
        <ContentWrapper>
          <Title>
            {
              title.map((row, key) => <H2 key={key} color='white'>{row}</H2>) || ''
            }
          </Title>
          <Grid arrayOfImages={arrayOfImages} withWolf />
          <RunningLine className={RunningLineStyle}></RunningLine>
        </ContentWrapper>
      </FlexLayerWrapper>
    </PhotoStartScreenWrapper>
  );
};
