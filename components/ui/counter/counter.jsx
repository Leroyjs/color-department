import {
  InputStyled,
  InputWrapper,
  MinusWrapper,
  PlusWrapper,
  Title,
  Underline,
  UnderlineInner,
} from "./counter.style";
import { PropTypes } from "prop-types";
import { Minus, Plus } from "components";

export const Counter = ({
  title,
  error,
  value,
  onChange,
  propsInput,
  ...props
}) => {
  const isActive = Boolean(value);

  function decrement() {
    if (value <= 0) return;
    const newValueDec = value - 1;
    onChange?.(newValueDec);
  }

  function increment() {
    if (value >= 999) return;
    const newValueInc = value + 1;
    onChange?.(newValueInc);
  }

  function handelTyping(e) {
    const { target } = e;
    const value = target?.value;
    if (isNaN(value) || value >= 1000) return;
    onChange?.(Number(value));
  }

  return (
    <InputWrapper {...props}>
      <Title isError={error}>{title}</Title>
      <InputStyled
        isActive={isActive}
        onChange={handelTyping}
        isError={error}
        type="text"
        value={value}
        {...propsInput}
      />
      <MinusWrapper>
        <Minus onClick={decrement} />
      </MinusWrapper>
      <PlusWrapper>
        <Plus onClick={increment} />
      </PlusWrapper>
      <Underline>
        <UnderlineInner isActive={isActive} isError={error} />
      </Underline>
    </InputWrapper>
  );
};

Counter.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
