import React, {useEffect, useState} from 'react';
import {PropTypes} from "prop-types";
import {useEscHandler, useVH} from "utils";
import {Portal} from "components";
import {ModalWrapper} from "./modal.style";
import {propTypesChildren} from "../../types";

export const Modal = ({children, isOpen, setOpen, ...props}) => {
    useEscHandler(isOpen ? () => setOpen(false) : null);
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
