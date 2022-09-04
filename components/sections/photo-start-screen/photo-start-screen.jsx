import { Grid, H2, RunningLine } from "components";
import { useVH } from "utils";
import {
  ContentWrapper,
  FlexLayerWrapper,
  PhotoStartScreenWrapper,
  RunningLineStyle,
  Title
} from "./photo-start-screen.style";

export const PhotoStartScreen = ({ arrayOfImages, title }) => {
  useVH();
  
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
