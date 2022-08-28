import React from 'react';
import {PropTypes} from "prop-types";
import {useEscHandler, useVH, useNoScroll} from "utils";
import {Portal} from "components";
import {ModalWrapper} from "./modal.style";
import {propTypesChildren} from "../../types";

export const Modal = ({children, isOpen, setOpen, ...props}) => {
    useEscHandler(isOpen ? () => setOpen(false) : null);
    useNoScroll(isOpen);
    useVH();

    return (
        <Portal>
            <ModalWrapper isOpen={isOpen} {...props}>
                {children}
            </ModalWrapper>
        </Portal>
    );
};

Modal.propTypes = {
    ...propTypesChildren,
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
}
