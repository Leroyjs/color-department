import styled from "@emotion/styled";
import { getCurrentGridTemplateColumsStyle } from "styles";


export const VideoGridWrapper = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()}
  position:relative;
  width: 100%;
  height: 100%;
`;
export const VideoItem = styled.div`
	position:relative;
	width:100%;
	height:100%;
`;