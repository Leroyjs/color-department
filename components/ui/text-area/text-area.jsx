import {PropTypes} from "prop-types";
import {Error, InputWrapper, TextAreaInput, TextAreaWrapper, Title} from "./text-area.style";
import {propTypesMargin, propTypesPadding} from "../../types";

export const TextArea = ({title, error, value = "", onChange, defaultValue, maxLength = 420, propsInput, ...props}) => {
    function resizeHeight(e) {
        e.target.style.height = "auto";
        const scrollHeight = e.target.scrollHeight;
        e.target.style.height = `${scrollHeight}px`
    }

    function handleKeyUp(e) {
        resizeHeight(e)
        onChange?.(e.target.value);
    }

    return (
        <InputWrapper {...props}>
            {title && <Title isError={error}>{title}</Title>}
            <TextAreaWrapper isActive={!!value}>
                <TextAreaInput isError={error} onChange={handleKeyUp} defaultValue={defaultValue}
                               maxLength={maxLength} value={value} {...propsInput}/>
            </TextAreaWrapper>
            {error && <Error>{error}</Error>}
        </InputWrapper>
    )
};

TextArea.propTypes = {
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
    error: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    ...propTypesMargin,
    ...propTypesPadding,
};
