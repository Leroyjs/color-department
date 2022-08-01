import {PropTypes} from "prop-types";
import {Error, InputWrapper, TextAreaWrapper, Title} from "./textArea.style";

export const TextArea = ({title, error, value = "", onChange, defaultValue, maxLength = 420, ...props}) => {
    function resizeHeight(e) {
        e.target.style.height = "auto";
        const scrollHeight = e.target.scrollHeight;
        e.target.style.height = `${scrollHeight}px`
    }

    function handleKeyUp(e) {
        // const numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
        resizeHeight(e)
        onChange?.(e.target.value);
    }

    return (
        <InputWrapper>
            {title && <Title isError={error}>{title}</Title>}
            <TextAreaWrapper isError={error} onChange={handleKeyUp} defaultValue={defaultValue}
                             maxLength={maxLength} {...props}/>
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
};
