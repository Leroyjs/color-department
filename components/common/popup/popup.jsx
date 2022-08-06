import {ButtonEllipse} from "components";
import {H2} from "components";
import {GratitudeWrapper} from "./popup.style";
import Modal from "../modal";

export const Popup = () => {
    return (
        <Modal isOpen={true}>
            <GratitudeWrapper>
                <H2 color="white">Thank you for your application,</H2>
                <H2 color="primary"
                    mb="md">we will contact you shortly</H2>
                <ButtonEllipse>OK</ButtonEllipse>
            </GratitudeWrapper>
        </Modal>
    );
};
