import {PropTypes} from "prop-types";
import {Error, InputWrapper, TextAreaInput, TextAreaWrapper, Title} from "./text-area.style";
import {propTypesMargin, propTypesPadding} from "../../types";

export const TextArea = ({
                             title,
                             error,
                             value = "",
                             onChange,
                             defaultValue,
                             rows = 4,
                             maxLength = 420,
                             propsInput,
                             isFullWidth = false,
                             isResizable = true,
                             ...props
                         }) => {
    function resizeHeight(e) {
        e.target.style.height = "auto";
        const scrollHeight = e.target.scrollHeight;
        e.target.style.height = `${scrollHeight}px`
    }

    function handleKeyUp(e) {
        isResizable && resizeHeight(e);
        const value = e.target.value;
        if (value.length > maxLength) return;
        onChange?.(value);
    }

    return (
        <InputWrapper isFullWidth={isFullWidth} {...props}>
            {title && <Title isError={error}>{title}</Title>}
            <TextAreaWrapper isActive={!!value} maxRows={rows}>
                <TextAreaInput isError={error} onChange={handleKeyUp} defaultValue={defaultValue}
                               maxLength={maxLength} value={value} rows={rows} {...propsInput}/>
            </TextAreaWrapper>
            {error && <Error>{error}</Error>}
        </InputWrapper>
    )
};

TextArea.propTypes = {
    isResizable: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    maxLength: PropTypes.number,
    rows: PropTypes.number,
    defaultValue: PropTypes.string,
    error: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    ...propTypesMargin,
    ...propTypesPadding,
};
