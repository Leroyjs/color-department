import { Caption, H1 } from 'components'
import React, { useEffect, useRef, useState } from 'react'
import {
  RunningLineScrollContent,
  RunningLineSeparator,
  RunningLineWrapper,
} from './running-line.style'

import PropTypes from 'prop-types'
import { withLink } from 'utils'

const SeparatorText = () => (
  <div>
    <Caption>a color</Caption>
    <br />
    <Caption>grading studio based</Caption>
    <br />
    <Caption>in los angeles</Caption>
    <br />
  </div>
)

const SeparatorLink = () => (
  <div>
    <Caption>We are happy</Caption>
    <br />
    <Caption>to chat with you</Caption>
  </div>
)

export const RunningLine = React.memo(
  ({ titles = [], outline, link, ...props }) => {
    const separator = link ? SeparatorLink : SeparatorText
    const [data, setData] = useState(null)

    useEffect(() => {
      const content = titles.reduce((acc, curr) => {
        acc.push(curr, separator)
        return acc
      }, [])
      //Добавляем в массив его копию, нужно для анимации
      content.push(...content)
      const data = content.map((title, index) =>
        index % 2 ? (
          <RunningLineSeparator key={index} outline={outline}>
            {separator()}
          </RunningLineSeparator>
        ) : (
          <H1 key={index}>{title}</H1>
        )
      )
      setData(data)
    }, [])

    return data ? (
      <RunningLineWrapper link={link} {...props}>
        <RunningLineScrollContent outline={outline}>
          {data}
        </RunningLineScrollContent>
      </RunningLineWrapper>
    ) : null
  }
)

export const RunningLineLink = withLink(RunningLine)

RunningLine.displayName = 'RunningLine'
RunningLine.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string),
  separator: PropTypes.element,
  outline: PropTypes.bool,
  link: PropTypes.string,
}
