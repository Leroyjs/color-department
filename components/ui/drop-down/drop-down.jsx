import {useEffect, useRef, useState} from "react";
import {PropTypes} from "prop-types";
import {propTypesMargin, propTypesPadding} from "../../types";
import {
    CurrentLabel,
    DropDownItem,
    DropDownList, DropDownOverlay,
    Error, IconPlus,
    InputStyled,
    InputWrapper,
    Underline,
    UnderlineInner
} from "./drop-down.style";
import {useEscHandler} from "../../../utils";

export const DropDown = ({
                             title,
                             error,
                             value,
                             options,
                             onChange,
                             multiple = false,
                             propsInput,
                             isFullWidth = false,
                             ...props
                         }) => {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const listRef = useRef();
    const isActive = Boolean(selected.length);
    useEscHandler(isOpen ? () => setOpen(false) : null);

    useEffect(() => {
        const scrollHeight = listRef.current.scrollHeight;
        listRef.current.setAttribute('style', `--height-drop-down: ${scrollHeight}px`)
    }, [options.length])

    function handleOpen() {
        setOpen(prevState => !prevState)
    }

    function handleOverlay() {
        setOpen(false);
    }

    function handleOption(option) {
        if (multiple) {
            setSelected(prevOptions => {
                const isInclude = prevOptions.some(({value}) => value === option.value);
                if (isInclude) {
                    const newOptions = prevOptions.filter(({value}) => value !== option.value);
                    onChange?.(newOptions)
                    return newOptions;
                } else {
                    const newOptions = [...prevOptions, option];
                    onChange?.(newOptions)
                    return newOptions;
                }
            })
        } else {
            setSelected([option]);
            onChange?.(option)
        }

        setOpen(false);
    }

    return (
        <InputWrapper isFullWidth={isFullWidth} {...props}>
            <InputStyled isActive={isActive} isOpen={isOpen} onChange={onChange} onClick={handleOpen}
                         isError={error} type="text" {...propsInput}>
                <CurrentLabel>
                    {multiple ?
                        Boolean(selected.length) ?
                            selected.map(({label}) => label).join(', ') : title
                        : value?.label || title}
                </CurrentLabel>
                <IconPlus isError={error} isActive={isActive} isOpen={isOpen} viewBox="0 0 26 26" fill="none">
                    <path d="M0 13H26M13 26L13 0" strokeWidth="2"/>
                </IconPlus>
            </InputStyled>
            <Underline>
                <UnderlineInner isActive={isActive} isError={error}/>
            </Underline>
            <DropDownList isOpen={isOpen} ref={listRef}>
                {options.map((option) => (
                    <DropDownItem key={option.value} isActive={selected.some(({value}) => value === option.value)}
                                  onClick={() => handleOption(option)}>
                        {option.label}
                    </DropDownItem>
                ))}
            </DropDownList>
            <DropDownOverlay onClick={handleOverlay} isOpen={isOpen}/>
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
    multiple: PropTypes.bool,
    value: PropTypes.oneOfType([
        shapeOption,
        PropTypes.arrayOf(shapeOption)
    ]),
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(shapeOption).isRequired,
    error: PropTypes.string,
    ...propTypesMargin,
    ...propTypesPadding,
};
