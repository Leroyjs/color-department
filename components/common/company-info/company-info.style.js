import styled from '@emotion/styled'
import { hexToRGBA } from 'styles'
import {
  colors,
  getCurrentPaddingStyle,
  getCurrentColor,
  breakpointsWidth,
} from 'styles'
import { Caption } from '../../ui/caption/'

export const CompanyInfoWrapper = styled.div`
  position: absolute;
  ${getCurrentPaddingStyle('', 'md')};
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & span {
    display: block;
  }
`

export const CaptionBr = styled(Caption)`
  margin-left: 0.5em;
  margin-right: 0.5em;
  color: ${colors.white};
`

export const CaptionLink = styled(Caption)`
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    color: ${({ theme }) => getCurrentColor('primary', theme)};
  }

  transition: color 0.3s;
`
export const ContactInfo = styled.div`
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const AdditionInfo = styled.div`
  text-align: right;
`

export const MadeBy = styled.div`
  padding-bottom: 16px;
  cursor: pointer;

  color: ${colors.white};

  &:hover {
    color: ${({ theme }) => getCurrentColor('primary', theme)};
  }

  transition: color 0.3s;

  & span {
    color: ${colors.white};
  }
`

export const LinksBy = styled.div`
  display: inline-flex;
  align-items: center;
`

export const YearInfoMobile = styled.div`
  display: none;
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: inline-block;
  }
`
