import {
  Error,
  InputStyled,
  InputWrapper,
  Title,
  Underline,
  UnderlineInner,
} from "./input.style";

import { PropTypes } from "prop-types";

export const Input = ({ title, error, value = "", onChange, ...props }) => (
  <InputWrapper {...props}>
    <Title isError={error}>{title}</Title>
    <InputStyled onChange={onChange} isError={error} type="text" {...props} />
    <Underline>
      <UnderlineInner isActive={value} isError={error} />
    </Underline>
    {error && <Error>{error}</Error>}
  </InputWrapper>
);

Input.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
