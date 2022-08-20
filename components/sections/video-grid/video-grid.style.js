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
export const DropDownsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap:40px ;
  justify-content: space-between;
`;