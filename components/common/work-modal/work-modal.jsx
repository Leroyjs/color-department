import Link from "next/link";
import React, { useState } from "react";
import {ButtonEllipse, Modal} from "components";
import { GratitudeWrapper, StyledH2 } from "./work-modal.style";

export const WorkModal = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Modal isOpen={isModalOpen} setOpen={setModalOpen}>
      <GratitudeWrapper>
        <StyledH2 color="white">Thank you for your application,</StyledH2>
        <StyledH2 color="primary" mb="md">
          we will contact you shortly
        </StyledH2>
        <Link href="/" onClick={() => setModalOpen(false)}>
          <ButtonEllipse>
            <a>OK</a>
          </ButtonEllipse>
        </Link>
      </GratitudeWrapper>
    </Modal>
  );
};
