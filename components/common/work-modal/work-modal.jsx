import Modal from "../modal";
import { ButtonEllipse } from "components";
import { H2 } from "components";
import { GratitudeWrapper, StyledH2 } from "./work-modal.style";
import Link from "next/link";

export const WorkModal = () => {
  return (
    <Modal isOpen={true}>
      <GratitudeWrapper>
        <StyledH2 color="white">Thank you for your application,</StyledH2>
        <StyledH2 color="primary" mb="md">we will contact you shortly</StyledH2>
        <Link href="/">
          <ButtonEllipse><a>OK</a></ButtonEllipse>
        </Link>
      </GratitudeWrapper>
    </Modal>
  );
};
