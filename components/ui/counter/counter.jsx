import {
    InputStyled,
    InputWrapper,
    MinusWrapper,
    PlusWrapper,
    Title,
    Underline,
    UnderlineInner,
} from "./counter.style";
import {PropTypes} from "prop-types";
import {Minus, Plus} from "components";
import {Error} from "../input/input.style";

export const Counter = ({
                            title,
                            error,
                            value = 0,
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
        const {target} = e;
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
                value={value}
                {...propsInput}
            />
            <MinusWrapper>
                <Minus onClick={decrement} isError={!!error}/>
            </MinusWrapper>
            <PlusWrapper>
                <Plus onClick={increment} isError={!!error}/>
            </PlusWrapper>
            <Underline>
                <UnderlineInner isActive={isActive} isError={error}/>
            </Underline>
            {error && <Error>{error}</Error>}
        </InputWrapper>
    );
};

Counter.propTypes = {
    title: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};
