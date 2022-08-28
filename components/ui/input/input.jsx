import { PropTypes } from "prop-types";
import { forwardRef } from "react";
import {
  Error,
  InputStyled,
  InputWrapper,
  Title,
  Underline,
  UnderlineInner,
} from "./input.style";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { 
      title,
      error,
      value = "",
      onChange,
      propsInput,
      isFullWidth = false,
      ...props
    },
    ref
  ) => (
    <InputWrapper isFullWidth={isFullWidth} {...props}>
      <Title isError={error}>{title}</Title>
      <InputStyled
        onChange={onChange}
        isError={error}
        type="text"
        ref={ref}
        {...propsInput}
      />
      <Underline>
        <UnderlineInner isActive={value} isError={error} />
      </Underline>
      {error && <Error>{error}</Error>}
    </InputWrapper>
  )
);

Input.propTypes = {
  title: PropTypes.string,
  isFullWidth: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
