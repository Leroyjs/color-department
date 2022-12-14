import { colors } from 'styles'
import { getCurrentGridTemplateColumsStyle, breakpointsWidth } from 'styles'
import { hexToRGBA } from 'styles'
import styled from '@emotion/styled'

export const GridWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`

export const GridInner = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()};
  grid-template-rows: repeat(10, 12.5vw);
  height: 100%;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-rows: repeat(20, 25vw);
  }
`

export const Cell = styled.div`
  width: 100%;
  height: 100%;

  border-top: 1px solid ${hexToRGBA(colors.white, 0.2)};
  padding: 20px;

  &:not(:nth-of-type(8n)) {
    border-right: 1px solid ${hexToRGBA(colors.white, 0.2)};
  }
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    min-height: 25vw;
    height: 25vw;

    &:nth-of-type(4n) {
      border-right: none;
    }
  }
`

export const CellImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${({ image }) => image}');
  background-position: center;
  background-size: cover;
  transition: opacity 0.3s
    ${({ step, isVisible }) => step * 0.2 + (isVisible ? 0 : 1.1)}s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
