import { colors, sizes } from "styles";

import { Grid } from "components";
import { H3 } from "components";
import { getCurrentBackgroundColorStyles } from "styles";
import { getCurrentGridTemplateColumsStyle } from "styles";
import styled from "@emotion/styled";

export const PreloaderWrapper = styled.div`
  ${getCurrentGridTemplateColumsStyle()}
  display: grid;
  grid-template-rows: ${sizes.desktopLG.half} 100%;
  background-color: ${colors.black};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
`;

export const PreloaderHeader = styled.div`
  grid-column: 1/9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Number = styled(H3)`
  height: 1.12em;
  overflow: hidden;
`;

export const NumberInner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateY(${({ step = 1 }) => step * -1.12}em);
  transition: transform 0.3s;
`;

export const HeaderLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)}
  transform: scaleX(${({ percent }) => percent / 100});
  transform-origin: left;
  transition: transform 1s;
`;

export const GridStyled = styled(Grid)`
  position: absolute;
`;

export const GridWrapper = styled.div`
  grid-column: 1/9;
  position: relative;
`;

export const FoxBoxWrapper = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()}
  grid-template-rows: repeat(8, ${sizes.desktopLG.x1});
`;

export const ImageWrapper = styled.div(
  ({ animation, gridArea }) => `
  transition: transition .5s;
  background: #ffffff;
  grid-area: ${gridArea}/${gridArea};
  ${animation}
`
);
