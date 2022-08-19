import React from "react";
import {ButtonEllipse, Modal} from "components";
import { GratitudeWrapper, StyledH2 } from "./work-modal.style";

export const WorkModal = ({ isOpen, setOpen }) => {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <GratitudeWrapper>
        <StyledH2 color="white">Thank you for your application,</StyledH2>
        <StyledH2 color="primary" mb="md">
          we will contact you shortly
        </StyledH2>
        <ButtonEllipse onClick={() => setOpen(false)}>
          <a>OK</a>
        </ButtonEllipse>
      </GratitudeWrapper>
    </Modal>
  );
};
