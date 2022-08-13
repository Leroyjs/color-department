import {
  InputStyled,
  InputWrapper,
  Title,
  Underline,
  UnderlineInner,
} from "./counter.style";

import { PropTypes } from "prop-types";
import { Plus } from "components";
import { useState } from "react";
import { Minus } from "components";

export const Counter = ({
  title,
  error,
  value = "",
  onChange,
  propsInput,
  ...props
}) => {
  const [count, setCount] = useState(1);
  const isActive = Boolean(value);

  return (
    <InputWrapper {...props}>
      <Title isError={error}>{title}</Title>
      <InputStyled
        isActive={isActive}
        onChange={count}
        isError={error}
			  type="text"
		  value={count}
        {...propsInput}>



		  </InputStyled>
		  <Minus onClick={() => setCount(count - 1)}></Minus>
        <Plus onClick={() => setCount(count + 1)}></Plus>
      <Underline>
        <UnderlineInner isActive={isActive} isError={error} />
      </Underline>
    </InputWrapper>
  );
};

// Counter.propTypes = {
//   title: PropTypes.string,
//   error: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
