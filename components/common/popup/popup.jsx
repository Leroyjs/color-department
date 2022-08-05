import { ButtonEllipse } from "components";
import { H2 } from "components";
import { GratitudeWrapper } from "./popup.style";

export const Popup = () => {
  return (
    <GratitudeWrapper>
      <H2>Thank you for your application, we will contact you shortly</H2>
      <ButtonEllipse>OK</ButtonEllipse>
    </GratitudeWrapper>
  );
};