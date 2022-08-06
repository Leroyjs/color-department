import React from 'react';
import Portal from "../portal";
import {useVH} from "../../../utils";
import {ModalWrapper} from "./modal.style";
import {PropTypes} from "prop-types";

const Modal = ({children, isOpen, ...props}) => {
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

export default Modal;

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool.isRequired,
}
