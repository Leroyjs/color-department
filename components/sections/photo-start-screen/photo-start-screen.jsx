import {
  ContentWrapper,
  FlexLayerWrapper,
  PhotoStartScreenWrapper,
  RunningLineStyle,
} from "./photo-start-screen.style";
import { Grid, RunningLine } from "components";

export const PhotoStartScreen = ({ arrayOfImages }) => {
  return (
    <PhotoStartScreenWrapper>
      <FlexLayerWrapper>
        <ContentWrapper>
          <Grid arrayOfImages={arrayOfImages} withWolf />
          <RunningLine className={RunningLineStyle}></RunningLine>
        </ContentWrapper>
      </FlexLayerWrapper>
    </PhotoStartScreenWrapper>
  );
};
