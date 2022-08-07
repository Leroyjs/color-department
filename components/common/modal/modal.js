import React from 'react';
import {PropTypes} from "prop-types";
import {useVH} from "utils";
import {Portal} from "components";
import {ModalWrapper} from "./modal.style";

export const Modal = ({children, isOpen, ...props}) => {
    useVH();

    if (isOpen) return (
        <Portal>
            <ModalWrapper {...props}>
                {children}
            </ModalWrapper>
        </Portal>
    );

    return null;
};

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool.isRequired,
}
