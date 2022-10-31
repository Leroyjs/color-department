import { PropTypes } from 'prop-types'
import {
  Error,
  InputWrapper,
  TextAreaInput,
  TextAreaWrapper,
  Title,
} from './text-area.style'
import { propTypesMargin, propTypesPadding } from '../../types'
import { useEffect, useRef } from 'react'

export const TextArea = ({
  title,
  value = '',
  onChange,
  defaultValue,
  rows = 4,
  maxLength = 220,
  propsInput,
  isFullWidth = false,
  isResizable = true,
  ...props
}) => {
  const ref = useRef()
  const ref2 = useRef()

  function resizeHeight(e) {
    e.target.style.height = 'auto'
    const scrollHeight = e.target.scrollHeight
    e.target.parentNode.style.height = `${scrollHeight}px`
    e.target.style.height = `${scrollHeight}px`
  }

  function handleKeyUp(e) {
    isResizable && resizeHeight(e)
    const value = e.target.value
    // console.log(ref.current.scrollHeight, ref2.current.scrollHeight)
    // if (ref.current.scrollHeight > ref2.current.scrollHeight) return
    onChange?.(value)
  }

  return (
    <InputWrapper isFullWidth={isFullWidth} {...props}>
      {title && <Title>{title}</Title>}
      <TextAreaWrapper isActive={!!value} maxRows={rows} ref={ref2}>
        <TextAreaInput
          placeholder="About your work"
          onChange={handleKeyUp}
          defaultValue={defaultValue}
          // maxLength={maxLength}
          value={value}
          rows={rows}
          ref={ref}
          {...propsInput}
        />
      </TextAreaWrapper>
    </InputWrapper>
  )
}

TextArea.propTypes = {
  isResizable: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  defaultValue: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  ...propTypesMargin,
  ...propTypesPadding,
}
