import {
  H1,
  H2,
  H3,
  Text,
  Caption,
  ButtonEllipse,
  ButtonRectangle,
} from "components";
import "styles/global.style";

const UI = () => {
  return (
    <>
      <main>
        <H1>H1 header</H1>
        <H2>H2 header</H2>
        <H3>H3 header</H3>
        <Text>plain text</Text>
        <br />
        <Caption>caption</Caption>
        <ButtonEllipse>12312</ButtonEllipse>
        <ButtonRectangle>SEND</ButtonRectangle>
      </main>
    </>
  );
};

export default UI;
