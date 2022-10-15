import React from 'react'
import { PropTypes } from 'prop-types'
import { H3 } from '../h3'
import { Item, Wrapper, CaptionStyled } from './stakeholders.style'

export const Stakeholders = ({
  client,
  colourist,
  director,
  dop,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Item>
        <CaptionStyled color="white" mb="xxsm">
          Client
        </CaptionStyled>
        <H3 color="white">{client}</H3>
      </Item>

      <Item>
        <CaptionStyled color="white" mb="xxsm">
          Director
        </CaptionStyled>
        <H3 color="white">{director}</H3>
      </Item>

      <Item>
        <CaptionStyled color="white" mb="xxsm">
          DOP
        </CaptionStyled>
        <H3 color="white">{dop}</H3>
      </Item>

      <Item>
        <CaptionStyled color="white" mb="xxsm">
          Colourist
        </CaptionStyled>
        <H3 color="white">{colourist}</H3>
      </Item>
    </Wrapper>
  )
}

Stakeholders.propTypes = {
  client: PropTypes.string.isRequired,
  colourist: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  dop: PropTypes.string.isRequired,
}
