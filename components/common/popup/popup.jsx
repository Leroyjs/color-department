import { ButtonEllipse } from "components";
import { H2 } from "components";
import { GratitudeWrapper } from "./popup.style";

export const Popup = () => {
  return (
    <GratitudeWrapper>
      <H2 color="white">Thank you for your application,</H2>
      <H2 color="primary"
          mb="md">we will contact you shortly</H2>
      <ButtonEllipse>OK</ButtonEllipse>
    </GratitudeWrapper>
  );
};
