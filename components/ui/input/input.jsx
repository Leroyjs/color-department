import {
  Error,
  InputStyled,
  InputWrapper,
  Title,
  Underline,
  UnderlineInner,
} from "./input.style";

import { PropTypes } from "prop-types";

export const Input = ({
  title,
  error,
  value = "",
  onChange,
  propsInput,
  isFullWidth = false,
  ...props
}) => (
  <InputWrapper isFullWidth={isFullWidth} {...props }>
    <Title isError={error}>{title}</Title>
    <InputStyled
      onChange={onChange}
      isError={error}
      type="text"
      {...propsInput}
    />
    <Underline>
      <UnderlineInner isActive={value} isError={error} />
    </Underline>
    {error && <Error>{error}</Error>}
  </InputWrapper>
);

Input.propTypes = {
  title: PropTypes.string,
  isFullWidth: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
