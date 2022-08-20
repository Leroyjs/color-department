import {useState} from "react";
import {PropTypes} from "prop-types";
import {propTypesMargin, propTypesPadding} from "../../types";
import {
    CurrentLabel,
    DropDownItem,
    DropDownList,
    Error, IconPlus,
    InputStyled,
    InputWrapper,
    Underline,
    UnderlineInner
} from "./drop-down.style";

export const DropDown = ({title, error, value, options, onChange, propsInput, isFullWidth = false, ...props}) => {
    const [isOpen, setOpen] = useState(false);
    const isActive = Boolean(value);

    function handleOpen() {
        setOpen(prevState => !prevState)
    }

    function handleOption(option) {
        setOpen(false);
        onChange?.(option)
    }

    return (
        <InputWrapper isFullWidth={isFullWidth} {...props}>
            <InputStyled isActive={isActive} isOpen={isOpen} onChange={onChange} onClick={handleOpen}
                         isError={error} type="text" {...propsInput}>
                <CurrentLabel>
                    {value?.label || title}
                </CurrentLabel>
                <IconPlus isError={error} isActive={isActive} isOpen={isOpen} viewBox="0 0 26 26" fill="none">
                    <path d="M0 13H26M13 26L13 0" strokeWidth="2"/>
                </IconPlus>
            </InputStyled>
            <Underline>
                <UnderlineInner isActive={isActive} isError={error}/>
            </Underline>
            <DropDownList isOpen={isOpen}>
                {options.map((option) => (
                    <DropDownItem key={option.value} onClick={() => handleOption(option)}>
                        {option.label}
                    </DropDownItem>
                ))}
            </DropDownList>
            {error && <Error>{error}</Error>}
        </InputWrapper>
    )
};

const shapeOption = PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
})

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    isFullWidth: PropTypes.bool,
    value: PropTypes.oneOfType([
        shapeOption,
        PropTypes.oneOf([null])
    ]),
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(shapeOption).isRequired,
    error: PropTypes.string,
    ...propTypesMargin,
    ...propTypesPadding,
};
